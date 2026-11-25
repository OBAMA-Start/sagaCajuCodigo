gdjs.creditosCode = {};
gdjs.creditosCode.localVariables = [];
gdjs.creditosCode.idToCallbackMap = new Map();
gdjs.creditosCode.GDBackgroundObjects1= [];
gdjs.creditosCode.GDBackgroundObjects2= [];
gdjs.creditosCode.GDhome_9595buttonObjects1= [];
gdjs.creditosCode.GDhome_9595buttonObjects2= [];
gdjs.creditosCode.GDEcoPontosObjects1= [];
gdjs.creditosCode.GDEcoPontosObjects2= [];
gdjs.creditosCode.GDfundo_9595ecoPontosObjects1= [];
gdjs.creditosCode.GDfundo_9595ecoPontosObjects2= [];
gdjs.creditosCode.GDcajuObjects1= [];
gdjs.creditosCode.GDcajuObjects2= [];
gdjs.creditosCode.GDmenuObjects1= [];
gdjs.creditosCode.GDmenuObjects2= [];
gdjs.creditosCode.GDtituloObjects1= [];
gdjs.creditosCode.GDtituloObjects2= [];
gdjs.creditosCode.GDfundo_9595p1Objects1= [];
gdjs.creditosCode.GDfundo_9595p1Objects2= [];
gdjs.creditosCode.GDdescri_95231_95227oObjects1= [];
gdjs.creditosCode.GDdescri_95231_95227oObjects2= [];
gdjs.creditosCode.GDprogresso_9595textoObjects1= [];
gdjs.creditosCode.GDprogresso_9595textoObjects2= [];
gdjs.creditosCode.GDfundo_9595p2Objects1= [];
gdjs.creditosCode.GDfundo_9595p2Objects2= [];
gdjs.creditosCode.GDfundo_9595p3Objects1= [];
gdjs.creditosCode.GDfundo_9595p3Objects2= [];
gdjs.creditosCode.GDfundo_9595p4Objects1= [];
gdjs.creditosCode.GDfundo_9595p4Objects2= [];
gdjs.creditosCode.GDdescri_95231_95227o2Objects1= [];
gdjs.creditosCode.GDdescri_95231_95227o2Objects2= [];
gdjs.creditosCode.GDdescri_95231_95227o3Objects1= [];
gdjs.creditosCode.GDdescri_95231_95227o3Objects2= [];
gdjs.creditosCode.GDdescri_95231_95227o4Objects1= [];
gdjs.creditosCode.GDdescri_95231_95227o4Objects2= [];
gdjs.creditosCode.GDsubtituloObjects1= [];
gdjs.creditosCode.GDsubtituloObjects2= [];
gdjs.creditosCode.GDfundo_9595p5Objects1= [];
gdjs.creditosCode.GDfundo_9595p5Objects2= [];
gdjs.creditosCode.GDdescri_95231_95227o5Objects1= [];
gdjs.creditosCode.GDdescri_95231_95227o5Objects2= [];
gdjs.creditosCode.GDagradecimentosObjects1= [];
gdjs.creditosCode.GDagradecimentosObjects2= [];
gdjs.creditosCode.GDtransi_95231_95227oObjects1= [];
gdjs.creditosCode.GDtransi_95231_95227oObjects2= [];


gdjs.creditosCode.mapOfGDgdjs_9546creditosCode_9546GDhome_95959595buttonObjects1Objects = Hashtable.newFrom({"home_button": gdjs.creditosCode.GDhome_9595buttonObjects1});
gdjs.creditosCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu_musicamp3", 1, true, 40, 1);
}
{gdjs.evtTools.sound.setMusicOnChannelPlayingOffset(runtimeScene, 1, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("EcoPontos"), gdjs.creditosCode.GDEcoPontosObjects1);
{for(var i = 0, len = gdjs.creditosCode.GDEcoPontosObjects1.length ;i < len;++i) {
    gdjs.creditosCode.GDEcoPontosObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("home_button"), gdjs.creditosCode.GDhome_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.creditosCode.GDhome_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.creditosCode.GDhome_9595buttonObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.creditosCode.mapOfGDgdjs_9546creditosCode_9546GDhome_95959595buttonObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.creditosCode.GDhome_9595buttonObjects1[k] = gdjs.creditosCode.GDhome_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.creditosCode.GDhome_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Inicial", false);
}
}

}


};

gdjs.creditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.creditosCode.GDBackgroundObjects1.length = 0;
gdjs.creditosCode.GDBackgroundObjects2.length = 0;
gdjs.creditosCode.GDhome_9595buttonObjects1.length = 0;
gdjs.creditosCode.GDhome_9595buttonObjects2.length = 0;
gdjs.creditosCode.GDEcoPontosObjects1.length = 0;
gdjs.creditosCode.GDEcoPontosObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595ecoPontosObjects1.length = 0;
gdjs.creditosCode.GDfundo_9595ecoPontosObjects2.length = 0;
gdjs.creditosCode.GDcajuObjects1.length = 0;
gdjs.creditosCode.GDcajuObjects2.length = 0;
gdjs.creditosCode.GDmenuObjects1.length = 0;
gdjs.creditosCode.GDmenuObjects2.length = 0;
gdjs.creditosCode.GDtituloObjects1.length = 0;
gdjs.creditosCode.GDtituloObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595p1Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p1Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227oObjects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227oObjects2.length = 0;
gdjs.creditosCode.GDprogresso_9595textoObjects1.length = 0;
gdjs.creditosCode.GDprogresso_9595textoObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595p2Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p2Objects2.length = 0;
gdjs.creditosCode.GDfundo_9595p3Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p3Objects2.length = 0;
gdjs.creditosCode.GDfundo_9595p4Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p4Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o2Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o2Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o3Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o3Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o4Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o4Objects2.length = 0;
gdjs.creditosCode.GDsubtituloObjects1.length = 0;
gdjs.creditosCode.GDsubtituloObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595p5Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p5Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o5Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o5Objects2.length = 0;
gdjs.creditosCode.GDagradecimentosObjects1.length = 0;
gdjs.creditosCode.GDagradecimentosObjects2.length = 0;
gdjs.creditosCode.GDtransi_95231_95227oObjects1.length = 0;
gdjs.creditosCode.GDtransi_95231_95227oObjects2.length = 0;

gdjs.creditosCode.eventsList0(runtimeScene);
gdjs.creditosCode.GDBackgroundObjects1.length = 0;
gdjs.creditosCode.GDBackgroundObjects2.length = 0;
gdjs.creditosCode.GDhome_9595buttonObjects1.length = 0;
gdjs.creditosCode.GDhome_9595buttonObjects2.length = 0;
gdjs.creditosCode.GDEcoPontosObjects1.length = 0;
gdjs.creditosCode.GDEcoPontosObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595ecoPontosObjects1.length = 0;
gdjs.creditosCode.GDfundo_9595ecoPontosObjects2.length = 0;
gdjs.creditosCode.GDcajuObjects1.length = 0;
gdjs.creditosCode.GDcajuObjects2.length = 0;
gdjs.creditosCode.GDmenuObjects1.length = 0;
gdjs.creditosCode.GDmenuObjects2.length = 0;
gdjs.creditosCode.GDtituloObjects1.length = 0;
gdjs.creditosCode.GDtituloObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595p1Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p1Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227oObjects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227oObjects2.length = 0;
gdjs.creditosCode.GDprogresso_9595textoObjects1.length = 0;
gdjs.creditosCode.GDprogresso_9595textoObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595p2Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p2Objects2.length = 0;
gdjs.creditosCode.GDfundo_9595p3Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p3Objects2.length = 0;
gdjs.creditosCode.GDfundo_9595p4Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p4Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o2Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o2Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o3Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o3Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o4Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o4Objects2.length = 0;
gdjs.creditosCode.GDsubtituloObjects1.length = 0;
gdjs.creditosCode.GDsubtituloObjects2.length = 0;
gdjs.creditosCode.GDfundo_9595p5Objects1.length = 0;
gdjs.creditosCode.GDfundo_9595p5Objects2.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o5Objects1.length = 0;
gdjs.creditosCode.GDdescri_95231_95227o5Objects2.length = 0;
gdjs.creditosCode.GDagradecimentosObjects1.length = 0;
gdjs.creditosCode.GDagradecimentosObjects2.length = 0;
gdjs.creditosCode.GDtransi_95231_95227oObjects1.length = 0;
gdjs.creditosCode.GDtransi_95231_95227oObjects2.length = 0;


return;

}

gdjs['creditosCode'] = gdjs.creditosCode;
