$(function(){
	// 远程监控火警显示
	var myremote = echarts.init(document.getElementById('remote-monitoring'));
	option = {
		title: {
			text: '远程监控火警显示',
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data:['误报火警','确认火警']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
	
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['11','12','01','02','03','04','05']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				name:'误报火警',
				type:'line',
				stack: '总量',
				data:[0, 0, 0, 0, 0, 0, 0]
			},
			{
				name:'确认火警',
				type:'line',
				stack: '总量',
				data:[0, 0, 0, 0, 0, 0, 0]
			}
		]
	};
	myremote.setOption(option);
	// 远程监控火警显示  
	// 重大火灾隐患显示
	var myhazard = echarts.init(document.getElementById('fire-hazard'));
	var option = {
		title: {
			text: '重大火灾隐患显示', //标题文本内容
		},
		toolbox: { //可视化的工具箱
			show: true
			
		},
		tooltip: { //弹窗组件
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '重大火灾隐患显示',
			type: 'gauge',
			detail: {formatter:'{value}%'},
			data: [{value: 0, name: '暂无'}]
		}]

		};

		
	myhazard.setOption(option);

})

