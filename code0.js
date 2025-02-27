gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDbackObjects1= [];
gdjs.menuCode.GDbackObjects2= [];
gdjs.menuCode.GDApplyObjects1= [];
gdjs.menuCode.GDApplyObjects2= [];
gdjs.menuCode.GDConfigObjects1= [];
gdjs.menuCode.GDConfigObjects2= [];
gdjs.menuCode.GDBackObjects1= [];
gdjs.menuCode.GDBackObjects2= [];
gdjs.menuCode.GDDownloadObjects1= [];
gdjs.menuCode.GDDownloadObjects2= [];
gdjs.menuCode.GDAdsObjects1= [];
gdjs.menuCode.GDAdsObjects2= [];
gdjs.menuCode.GDBuyObjects1= [];
gdjs.menuCode.GDBuyObjects2= [];
gdjs.menuCode.GDHeartObjects1= [];
gdjs.menuCode.GDHeartObjects2= [];
gdjs.menuCode.GDHelpObjects1= [];
gdjs.menuCode.GDHelpObjects2= [];
gdjs.menuCode.GDLargeBuyButtonObjects1= [];
gdjs.menuCode.GDLargeBuyButtonObjects2= [];
gdjs.menuCode.GDLargePlayButtonObjects1= [];
gdjs.menuCode.GDLargePlayButtonObjects2= [];
gdjs.menuCode.GDLargeExitButtonObjects1= [];
gdjs.menuCode.GDLargeExitButtonObjects2= [];
gdjs.menuCode.GDLeftArrowObjects1= [];
gdjs.menuCode.GDLeftArrowObjects2= [];
gdjs.menuCode.GDPauseObjects1= [];
gdjs.menuCode.GDPauseObjects2= [];
gdjs.menuCode.GDRetryObjects1= [];
gdjs.menuCode.GDRetryObjects2= [];
gdjs.menuCode.GDMenuObjects1= [];
gdjs.menuCode.GDMenuObjects2= [];
gdjs.menuCode.GDRightArrowObjects1= [];
gdjs.menuCode.GDRightArrowObjects2= [];
gdjs.menuCode.GDPlayObjects1= [];
gdjs.menuCode.GDPlayObjects2= [];
gdjs.menuCode.GDStarObjects1= [];
gdjs.menuCode.GDStarObjects2= [];
gdjs.menuCode.GDNextObjects1= [];
gdjs.menuCode.GDNextObjects2= [];
gdjs.menuCode.GDPlusObjects1= [];
gdjs.menuCode.GDPlusObjects2= [];
gdjs.menuCode.GDWorldObjects1= [];
gdjs.menuCode.GDWorldObjects2= [];
gdjs.menuCode.GDShareObjects1= [];
gdjs.menuCode.GDShareObjects2= [];
gdjs.menuCode.GDDasha_9595TapsObjects1= [];
gdjs.menuCode.GDDasha_9595TapsObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.menuCode.GDPlayObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.menuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDbackObjects1.length = 0;
gdjs.menuCode.GDbackObjects2.length = 0;
gdjs.menuCode.GDApplyObjects1.length = 0;
gdjs.menuCode.GDApplyObjects2.length = 0;
gdjs.menuCode.GDConfigObjects1.length = 0;
gdjs.menuCode.GDConfigObjects2.length = 0;
gdjs.menuCode.GDBackObjects1.length = 0;
gdjs.menuCode.GDBackObjects2.length = 0;
gdjs.menuCode.GDDownloadObjects1.length = 0;
gdjs.menuCode.GDDownloadObjects2.length = 0;
gdjs.menuCode.GDAdsObjects1.length = 0;
gdjs.menuCode.GDAdsObjects2.length = 0;
gdjs.menuCode.GDBuyObjects1.length = 0;
gdjs.menuCode.GDBuyObjects2.length = 0;
gdjs.menuCode.GDHeartObjects1.length = 0;
gdjs.menuCode.GDHeartObjects2.length = 0;
gdjs.menuCode.GDHelpObjects1.length = 0;
gdjs.menuCode.GDHelpObjects2.length = 0;
gdjs.menuCode.GDLargeBuyButtonObjects1.length = 0;
gdjs.menuCode.GDLargeBuyButtonObjects2.length = 0;
gdjs.menuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.menuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects1.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects2.length = 0;
gdjs.menuCode.GDLeftArrowObjects1.length = 0;
gdjs.menuCode.GDLeftArrowObjects2.length = 0;
gdjs.menuCode.GDPauseObjects1.length = 0;
gdjs.menuCode.GDPauseObjects2.length = 0;
gdjs.menuCode.GDRetryObjects1.length = 0;
gdjs.menuCode.GDRetryObjects2.length = 0;
gdjs.menuCode.GDMenuObjects1.length = 0;
gdjs.menuCode.GDMenuObjects2.length = 0;
gdjs.menuCode.GDRightArrowObjects1.length = 0;
gdjs.menuCode.GDRightArrowObjects2.length = 0;
gdjs.menuCode.GDPlayObjects1.length = 0;
gdjs.menuCode.GDPlayObjects2.length = 0;
gdjs.menuCode.GDStarObjects1.length = 0;
gdjs.menuCode.GDStarObjects2.length = 0;
gdjs.menuCode.GDNextObjects1.length = 0;
gdjs.menuCode.GDNextObjects2.length = 0;
gdjs.menuCode.GDPlusObjects1.length = 0;
gdjs.menuCode.GDPlusObjects2.length = 0;
gdjs.menuCode.GDWorldObjects1.length = 0;
gdjs.menuCode.GDWorldObjects2.length = 0;
gdjs.menuCode.GDShareObjects1.length = 0;
gdjs.menuCode.GDShareObjects2.length = 0;
gdjs.menuCode.GDDasha_9595TapsObjects1.length = 0;
gdjs.menuCode.GDDasha_9595TapsObjects2.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);
gdjs.menuCode.GDbackObjects1.length = 0;
gdjs.menuCode.GDbackObjects2.length = 0;
gdjs.menuCode.GDApplyObjects1.length = 0;
gdjs.menuCode.GDApplyObjects2.length = 0;
gdjs.menuCode.GDConfigObjects1.length = 0;
gdjs.menuCode.GDConfigObjects2.length = 0;
gdjs.menuCode.GDBackObjects1.length = 0;
gdjs.menuCode.GDBackObjects2.length = 0;
gdjs.menuCode.GDDownloadObjects1.length = 0;
gdjs.menuCode.GDDownloadObjects2.length = 0;
gdjs.menuCode.GDAdsObjects1.length = 0;
gdjs.menuCode.GDAdsObjects2.length = 0;
gdjs.menuCode.GDBuyObjects1.length = 0;
gdjs.menuCode.GDBuyObjects2.length = 0;
gdjs.menuCode.GDHeartObjects1.length = 0;
gdjs.menuCode.GDHeartObjects2.length = 0;
gdjs.menuCode.GDHelpObjects1.length = 0;
gdjs.menuCode.GDHelpObjects2.length = 0;
gdjs.menuCode.GDLargeBuyButtonObjects1.length = 0;
gdjs.menuCode.GDLargeBuyButtonObjects2.length = 0;
gdjs.menuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.menuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects1.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects2.length = 0;
gdjs.menuCode.GDLeftArrowObjects1.length = 0;
gdjs.menuCode.GDLeftArrowObjects2.length = 0;
gdjs.menuCode.GDPauseObjects1.length = 0;
gdjs.menuCode.GDPauseObjects2.length = 0;
gdjs.menuCode.GDRetryObjects1.length = 0;
gdjs.menuCode.GDRetryObjects2.length = 0;
gdjs.menuCode.GDMenuObjects1.length = 0;
gdjs.menuCode.GDMenuObjects2.length = 0;
gdjs.menuCode.GDRightArrowObjects1.length = 0;
gdjs.menuCode.GDRightArrowObjects2.length = 0;
gdjs.menuCode.GDPlayObjects1.length = 0;
gdjs.menuCode.GDPlayObjects2.length = 0;
gdjs.menuCode.GDStarObjects1.length = 0;
gdjs.menuCode.GDStarObjects2.length = 0;
gdjs.menuCode.GDNextObjects1.length = 0;
gdjs.menuCode.GDNextObjects2.length = 0;
gdjs.menuCode.GDPlusObjects1.length = 0;
gdjs.menuCode.GDPlusObjects2.length = 0;
gdjs.menuCode.GDWorldObjects1.length = 0;
gdjs.menuCode.GDWorldObjects2.length = 0;
gdjs.menuCode.GDShareObjects1.length = 0;
gdjs.menuCode.GDShareObjects2.length = 0;
gdjs.menuCode.GDDasha_9595TapsObjects1.length = 0;
gdjs.menuCode.GDDasha_9595TapsObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
