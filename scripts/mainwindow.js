
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
	console.log(layers)
	for (var i = 0; i < layers.getLength(); i++) {
		//获取每个图层的名称、是否可见属性
		layer[i] = layers.item(i);
		layerName[i] = layer[i].get('name');
		console.log(layer[i].get('name'));
		console.log(layer[i].get('classname'));
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

//实例化map对象
var map = new ol.Map({
	//地图容器div的ID
	target: 'mapcontainer',
	//在地图中加载的图层
	layers: basemaplayers,
	//地图视图设置
	view: new ol.View({
		//地图中心点
		center: [13576194, 4788260],
		//地图初始显示级别
		zoom: 5,
		minZoom: 3
	}),
	// controls: ol.control.defaults().extend([
	// 	new ol.control.MousePosition({
	// 		target: document.getElementById('mouse-position')
	// 	})
	// ])
});
//加载图层列表的数据
renderLayersControl(map, "layerTree");


