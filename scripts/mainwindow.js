

var map;
var projection = ol.proj.get('EPSG:4326');
var mapurls = [
	'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}',
	'http://t6.tianditu.com/DataServer?T=img_w&tk=bef531adb99419ce314d72edf3965a4f&x={x}&y={y}&l={z}',
];
var mapnames=['高德影像','天地图影像']
basemaplayers = []
var i, ii;
for (i = 0, ii = mapurls.length; i < ii; i++) {
	basemaplayers.push(
		new ol.layer.Tile({
			name:mapnames[i],
			classname:'LTphotomap',
			source: new ol.source.XYZ({
				url: mapurls[i],
				wrapX: false
			})
		})
	)
}
var mapurls = [
	'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
	'http://t2.dituhui.com/FileService/image?map=quanguo&type=web&x={x}&y={y}&z={z}'
];
var mapnames=['高德矢量','地图汇矢量地图']
for (i = 0, ii = mapurls.length; i < ii; i++) {
	basemaplayers.push(
		new ol.layer.Tile({
			name:mapnames[i],
			classname:'LTvector',
			source: new ol.source.XYZ({
				url: mapurls[i],
				wrapX: false
			})
		})
	)
}
var mapurls = [
	'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=8&x={x}&y={y}&z={z}',
	'http://t0.tianditu.com/DataServer?T=cva_w&tk=39aa46c83a722815e2ba2fc6d8685cd6&x={x}&y={y}&l={z}',
];
var mapnames=['高德注记','天地图注记']
for (i = 0, ii = mapurls.length; i < ii; i++) {
	basemaplayers.push(
		new ol.layer.Tile({
			name:mapnames[i],
			classname:'LTlabel',
			source: new ol.source.XYZ({
				url: mapurls[i],
				wrapX: false
			})
		})
	)
}
// localStorage.setItem('basemaplayers', basemaplayers);


map = new ol.Map({
		layers: basemaplayers,
		//地图容器div的ID
		target: 'mapcontainer',
		view: new ol.View({
			//地图初始中心点
			center: [12000000, 4000000],
			minZoom: 2,
			zoom: 3
		})
	});


Vue.createApp({
  data() {
    return {
      photomapsboxshow:true,
	  vectorsboxshow:true,
	  labelsboxshow:true,
	  jsonsboxshow:true
    }
  }
}).mount('#layerControl')

//Map中的图层数组
var layer = new Array();
//图层名称数组
var layerName = new Array();
//图层可见属性数组
var layerVisibility = new Array();

function renderLayersControl(map, id) {

	//获取地图中所有数组
	let layers = map.getLayers();
	// console.log(layers)
	for (var i = 0; i < layers.getLength(); i++) {
		//获取每个图层的名称、是否可见属性
		layer[i] = layers.item(i);
		layerName[i] = layer[i].get('name');
		// console.log(layer[i].get('name'));
		// console.log(layer[i].get('classname'));
		layerVisibility[i] = layer[i].getVisible();
		//新增li元素，用来保存图层
		var elementLi = document.createElement('li');
		//图层列表容器
		var treeContent = document.getElementById(layer[i].get('classname'));
		//添加子节点
		treeContent.appendChild(elementLi);
		//创建复选框元素
		var elementInput = document.createElement('input');
		elementInput.type = "checkbox";
		elementInput.name = "layers";
		elementLi.appendChild(elementInput);
		//创建lable元素
		var elementLable = document.createElement('lable');
		elementLi.appendChild(elementLable);
		//创建图层名称
		setInnerText(elementLable, layerName[i]);
		elementLi.appendChild(elementLable);
		//设置图层默认显示状态
		if (layerVisibility[i]) {
			elementInput.checked = true;
		}
		//为checkbox添加变更事件
		addChangeEvent(elementInput, layer[i]);
	}
}



/*
 为checkbox绑定变更事件
 * */
function addChangeEvent(element, layer) {
	element.onclick = function() {
		if (element.checked) {
			//显示图层
			layer.setVisible(true);
		} else {
			//不显示图层
			layer.setVisible(false);
		}
	};
}
/*
 动态设置元素文本内容（兼容）
 * */
function setInnerText(element, text) {
	if (typeof element.textContent == "string") {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}



///////////////////////////////////////////////////////////////////////////////
//绘制对象
var draw;

var source;
var vector;
var selectTool, menu_overlay;
var Modify;
//var defaultStyle = new ol.style.Style()
window.onload = function() {
	//实例化Map对象加载地图,默认底图加载MapQuest地图
	// map = new ol.Map({
	// 	layers: basemaplayers,
	// 	//地图容器div的ID
	// 	target: 'mapcontainer',
	// 	view: new ol.View({
	// 		//地图初始中心点
	// 		center: [12000000, 4000000],
	// 		minZoom: 2,
	// 		zoom: 3
	// 	})
	// });
	var select = new ol.interaction.Select();
	map.addInteraction(select);

	var modify = new ol.interaction.Modify({
		features: select.getFeatures()
	});
	map.addInteraction(modify);

	var defaultStyle = new ol.style.Style({
		fill: new ol.style.Fill({
			color: 'rgba(255, 255, 255, 0.2)'
		}),
		stroke: new ol.style.Stroke({
			color: '#ff0000',
			width: 2
		}),
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#ff0000'
			})
		})
	});

	//实例化一个矢量图层Vector作为绘制层
	source = new ol.source.Vector({
		wrapX: true
	});
	vector = new ol.layer.Vector({
		source: source,
		// style:defaultStyle
		style: function(feature) {
			var customStyle = feature.get('customstyle');
			return customStyle || defaultStyle;
		}
	});
	//将绘制层添加到地图容器中
	map.addLayer(vector);
	menu_overlay = new ol.Overlay({
		element: document.getElementById("popup"),
		positioning: 'center-center'
	});
	menu_overlay.setMap(map);
	//取消默认的右键
	map.getViewport().oncontextmenu = function(e) {
		e.preventDefault();
		var coordinate = map.getEventCoordinate(event);
		if (selectTool.getFeatures().getLength() != 0) {
			menu_overlay.setPosition(coordinate);
		}
	};
	selectTool = new ol.interaction.Select({
		layers: [vector]
	});
	map.addInteraction(selectTool);
	selectTool.setActive(false);
	Modify = {
		init: function() {
			this.select = new ol.interaction.Select();
			map.addInteraction(this.select);

			this.modify = new ol.interaction.Modify({
				features: this.select.getFeatures()
			});
			map.addInteraction(this.modify);
		},
		setActive: function(active) {
			this.select.setActive(active);
			this.modify.setActive(active);
		},
		removeInteraction: function() {
			map.removeInteraction(this.modify);
			map.removeInteraction(this.select);
		}
	};
};

//根据绘制类型进行交互绘制图形处理
function addInteraction(typevalue) {
	if (typevalue !== 'None') {
		if (source == null) {
			source = new ol.source.Vector({
				wrapX: true
			});
			//添加绘制层数据源
			console.log("begin")
			vector.setSource(source);
			console.log("end")
		}

		var geometryFunction, maxPoints;
		if (typevalue === 'Square') {
			typevalue = 'Circle';
			//正方形图形(圆)
			console.log('正方形图形(圆)')
			geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
		} else if (typevalue === 'Box') {
			typevalue = 'Circle';
			geometryFunction = new ol.interaction.Draw.createBox();
		} else if (typevalue === 'Star') {
			typevalue = 'Circle';
			geometryFunction = function(coordinates, geometry) {
				var center = coordinates[0];
				var last = coordinates[coordinates.length - 1];
				var dx = center[0] - last[0];
				var dy = center[1] - last[1];
				var radius = Math.sqrt(dx * dx + dy * dy);
				var rotation = Math.atan2(dy, dx);
				var newCoordinates = [];
				var numPoints = 12;
				for (var i = 0; i < numPoints; ++i) {
					var angle = rotation + (i * 2 * Math.PI) / numPoints;
					var fraction = i % 2 === 0 ? 1 : 0.5;
					var offsetX = radius * fraction * Math.cos(angle);
					var offsetY = radius * fraction * Math.sin(angle);
					newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
				}
				newCoordinates.push(newCoordinates[0].slice());
				if (!geometry) {
					geometry = new ol.geom.Polygon([newCoordinates]);
				} else {
					geometry.setCoordinates([newCoordinates]);
				}
				return geometry;
			};
		}
		//实例化交互绘制类对象并添加到地图容器中
		draw = new ol.interaction.Draw({
			//绘制层数据源
			source: source,
			type: typevalue,
			//几何信息变更时调 用函数
			geometryFunction: geometryFunction,
			//最大点数
			maxPoints: maxPoints
		});
		map.addInteraction(draw);
	} else {
		source = null;
		//清空绘制图形
		vector.setSource(source);
	}
};

var initDraw = function() {
	//移除绘制图形
	map.removeInteraction(draw);
	selectTool.setActive(false);
	selectTool.getFeatures().clear();

	//默认背景色
	document.getElementById("polygonBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("lineBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("circleBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("pointBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("eraserBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("squareBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("recBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("starBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("selectBtn").style.background = "rgba(0,60,136,.5)";
	document.getElementById("editBtn").style.background = "rgba(0,60,136,.5)";

};
//默认为画点
var drawPoint = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("Point");
	document.getElementById("pointBtn").style.background = "#22A6F2";
	document.getElementById("pointBtn").style.color = "#eee";
};
//画线
var drawLine = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("LineString");
	document.getElementById("lineBtn").style.background = " #22A6F2";
	document.getElementById("lineBtn").style.color = "#eee";
};
//画面
var drawPolygon = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("Polygon");
	document.getElementById("polygonBtn").style.background = "#22A6F2";
	document.getElementById("polygonBtn").style.color = "#eee";
};
//画圆
var drawCircle = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("Circle");
	document.getElementById("circleBtn").style.background = "#22A6F2";
	document.getElementById("circleBtn").style.color = "#eee";
};
//画正方形
var drawSquare = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("Square");
	document.getElementById("squareBtn").style.background = "#22A6F2";
	document.getElementById("squareBtn").style.color = "#eee";
};
//画长方形
var drawRec = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("Box");
	document.getElementById("recBtn").style.background = "#22A6F2";
	document.getElementById("recBtn").style.color = "#eee";
};
//画星形
var drawStar = function() {
	initDraw();
	//添加交互绘制功能控件
	addInteraction("Star");
	document.getElementById("starBtn").style.background = "#22A6F2";
	document.getElementById("starBtn").style.color = "#eee";
};
//清空
var drawEraser = function() {
	initDraw();
	source.clear();
	document.getElementById("eraserBtn").style.background = "#22A6F2";
	document.getElementById("eraserBtn").style.color = "#eee";
};
//选择
var selectFea = function() {
	initDraw();
	selectTool.setActive(true);
	document.getElementById("selectBtn").style.background = "#22A6F2";
	document.getElementById("selectBtn").style.color = "#eee";
};
var editFea = function() {
	initDraw();
	Modify.init();
	Modify.setActive(true);

	document.getElementById("editBtn").style.background = "#22A6F2";
	document.getElementById("editBtn").style.color = "#eee";
};
var changeFeatureStyle = function() {
	var newcolor = document.getElementById("linecolor").value;
	var fillcolor = document.getElementById("fillcolor").value;
	var linewidth = document.getElementById("linewidth").value;
	var newstyle = new ol.style.Style({
		fill: new ol.style.Fill({
			color: fillcolor
		}),
		stroke: new ol.style.Stroke({
			color: newcolor,
			width: eval(linewidth)
		}),
		image: new ol.style.Circle({
			radius: 7,
			fill: new ol.style.Fill({
				color: '#ff0000'
			})
		})
	});
	selectTool.getFeatures().item(0).set('customstyle', newstyle);
	// selectTool. getFeatures(). getArray()[0]. setSty1e(newsty1e);
	menu_overlay.setPosition(undefined);
};
var popupClose = function() {
	menu_overlay.setPosition(undefined);
}




// //实例化map对象
// var map = new ol.Map({
// 	//地图容器div的ID
// 	target: 'mapcontainer',
// 	//在地图中加载的图层
// 	layers: basemaplayers,
// 	//地图视图设置
// 	view: new ol.View({
// 		//地图中心点
// 		center: [13576194, 4788260],
// 		//地图初始显示级别
// 		zoom: 3,
// 		minZoom: 2
// 	}),
// 	// controls: ol.control.defaults().extend([
// 	// 	new ol.control.MousePosition({
// 	// 		target: document.getElementById('mouse-position')
// 	// 	})
// 	// ])
// });
//加载图层列表的数据

// var map = localStorage.getItem('map')
// localStorage.setItem('map', map)
renderLayersControl(map, "layerTree");


