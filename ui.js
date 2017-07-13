    window.dhx4.skin = 'dhx_web';
	
	var layout = new dhtmlXLayoutObject(document.body, '1C');

	var a = layout.cells('a');
	a.setText('Dashboard');
	
	var chart = a.attachChart({
		view: 'bar' ,
		tooltip:{
			template:'#sales#'
		},
		legend:{"template":"#year#","marker":{"type":"round","width":25,"height":15}},
		gradient: false,
		xAxis:{"title":"Reservas por guia ano 2017","template":"#year#","step":"2"},
		yAxis:{"title":"Ano","start":"0","end":"10","step":"2"},
		value:'#sales#'
	});

	chart.load('./data/chart.xml', 'xml');



	var toolbar = layout.attachToolbar();
	toolbar.setIconsPath('./codebase/imgs/');
	
	toolbar.loadStruct('<toolbar><item type="buttonSelect" id="reservas" text="Reservas" title="" ><item type="button" id="button_select_option_1" text="Lista" /><item type="button" id="button_select_option_2" text="Importar reservas" /><item type="button" id="button_select_option_3" text="Reset base de dados" /></item><item type="button" id="exportar" text="Exportar reservas" /><item type="button" id="voo" text="Alterar Vôos" /><item type="buttonSelect" id="entidades" text="Gestão de entidades" ><item type="button" id="button_select_option_4" text="Pacotes" /><item type="button" id="button_select_option_5" text="Guias" /><item type="button" id="button_select_option_6" text="Hotéis" /><item type="button" id="button_select_option_7" text="TMS" /><item type="button" id="button_select_option_8" text="Rent-a-car" /><item type="button" id="button_select_option_9" text="Localidades" /><item type="button" id="button_select_option_10" text="Preis" /><item type="button" id="button_select_option_11" text="Preis HF" /></item><item type="buttonSelect" id="emails" text="Gestão de e-mails" ><item type="button" id="button_select_option_12" text="Configurações Hotéis" /><item type="button" id="button_select_option_13" text="Configurações Rent-a-car" /><item type="button" id="button_select_option_14" text="Caixa de Saída" /></item></toolbar>', function() {});

	var windows = new dhtmlXWindows();
	windows.setSkin('dhx_web');

	var win_reservas_lista = windows.createWindow('win_reservas_lista', 0, 0, 900, 400);
	var tabbar_reservas_lista = win_reservas_lista.attachTabbar();
	tabbar_reservas_lista.addTab('actuais','Actuais');
	var actuais = tabbar_reservas_lista.cells('actuais');
	actuais.setActive();
	
	
	var grid_actuais = actuais.attachGrid();
	grid_actuais.setIconsPath('./codebase/imgs/');
	
	grid_actuais.setHeader(["TOM","Hotel","Data","Dia","Voo C","Hora C","Nº A ","Nº C","Saída","Voo S","Hora S","Nome","Essen","Guia","Nº Reserva "]);
	grid_actuais.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
	
	grid_actuais.setColSorting('str,str,str,str,str,str,str,str,str,str,str,str,str,str,str');
	grid_actuais.setInitWidths('*,*,*,*,*,*,*,*,*,*,*,*,*,*,*');
	grid_actuais.init();
	grid_actuais.load('./data/grid.xml', 'xml');
	


	tabbar_reservas_lista.addTab('canceladas','Canceladas');
	var canceladas = tabbar_reservas_lista.cells('canceladas');
	
	var grid_canceladas = canceladas.attachGrid();
	grid_canceladas.setIconsPath('./codebase/imgs/');
	
	grid_canceladas.setHeader(["TOM","Hotel","Data","Dia","Voo C","Hora C","Nº A ","Nº C","Saída","Voo S","Hora S","Nome","Essen","Guia","Nº Reserva "]);
	grid_canceladas.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
	
	grid_canceladas.setColSorting('str,str,str,str,str,str,str,str,str,str,str,str,str,str,str');
	grid_canceladas.setInitWidths('*,*,*,*,*,*,*,*,*,*,*,*,*,*,*');
	grid_canceladas.init();
	grid_canceladas.load('./data/grid.xml', 'xml');


	tabbar_reservas_lista.addTab('antigas','Antigas');
	var antigas = tabbar_reservas_lista.cells('antigas');





	win_reservas_lista.setText('Reservas - Lista');
	win_reservas_lista.button('minmax').show();
	win_reservas_lista.button('minmax').enable();


	var win_reservas_importar = windows.createWindow('win_reservas_importar', 300, 100, 300, 400);

	win_reservas_importar.setText('Reservas - Importar');
	win_reservas_importar.button('minmax').show();
	win_reservas_importar.button('minmax').enable();