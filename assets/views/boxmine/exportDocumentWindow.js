$(document).ready(function() {

	$('#export_document').click(function() {	

		console.log("Loaded Export Document Window.");
		
		/*
		var windowFrame = $("#default-export-document-window");
		var navigationButton = $("#export_document");
		
		var opacitySlider = $("#opacity");
		var fillStartColour = $("#fill_start_colour");
		var okButton = $("#edw_ok_button");
		var cancelButton = $("#edw_cancel_button");

		navigationButton.bind("click", function() {
		
			if(window.boxmine.activeWindow != null) {
				return;
			}

			window.boxmine.activeWindow = windowFrame;
			windowFrame.data("kendoWindow").open();
		});
		
		okButton.bind("click", function() {
			window.boxmine.activeWindow = null;
			windowFrame.data("kendoWindow").close();
		});
		
		cancelButton.bind("click", function() {
			window.boxmine.activeWindow = null;
			windowFrame.data("kendoWindow").close();
		});
		
		if(windowFrame.data("kendoWindow") == undefined) {
			windowFrame.kendoWindow({
				width: "600px",
				title: "Export Document",
				actions: []
			});
			
			windowFrame.data("kendoWindow").close();
			windowFrame.data("kendoWindow").center();
		}		
		*/
	});
});
