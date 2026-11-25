gdjs.fase1Code = {};
gdjs.fase1Code.localVariables = [];
gdjs.fase1Code.idToCallbackMap = new Map();
gdjs.fase1Code.GDAnswer1_9595ButtonObjects1= [];
gdjs.fase1Code.GDAnswer1_9595ButtonObjects2= [];
gdjs.fase1Code.GDAnswer1_9595ButtonObjects3= [];
gdjs.fase1Code.GDQuestionTextObjects1= [];
gdjs.fase1Code.GDQuestionTextObjects2= [];
gdjs.fase1Code.GDQuestionTextObjects3= [];
gdjs.fase1Code.GDAnswer2_9595ButtonObjects1= [];
gdjs.fase1Code.GDAnswer2_9595ButtonObjects2= [];
gdjs.fase1Code.GDAnswer2_9595ButtonObjects3= [];
gdjs.fase1Code.GDAnswer3_9595ButtonObjects1= [];
gdjs.fase1Code.GDAnswer3_9595ButtonObjects2= [];
gdjs.fase1Code.GDAnswer3_9595ButtonObjects3= [];
gdjs.fase1Code.GDdialogo_9595fundoObjects1= [];
gdjs.fase1Code.GDdialogo_9595fundoObjects2= [];
gdjs.fase1Code.GDdialogo_9595fundoObjects3= [];
gdjs.fase1Code.GDpergunta_9595quizObjects1= [];
gdjs.fase1Code.GDpergunta_9595quizObjects2= [];
gdjs.fase1Code.GDpergunta_9595quizObjects3= [];
gdjs.fase1Code.GDdialogoObjects1= [];
gdjs.fase1Code.GDdialogoObjects2= [];
gdjs.fase1Code.GDdialogoObjects3= [];
gdjs.fase1Code.GDinicio_9595botaoObjects1= [];
gdjs.fase1Code.GDinicio_9595botaoObjects2= [];
gdjs.fase1Code.GDinicio_9595botaoObjects3= [];
gdjs.fase1Code.GDnome_9595desafioObjects1= [];
gdjs.fase1Code.GDnome_9595desafioObjects2= [];
gdjs.fase1Code.GDnome_9595desafioObjects3= [];
gdjs.fase1Code.GDbackgroundObjects1= [];
gdjs.fase1Code.GDbackgroundObjects2= [];
gdjs.fase1Code.GDbackgroundObjects3= [];
gdjs.fase1Code.GDAnswer1_9595BgObjects1= [];
gdjs.fase1Code.GDAnswer1_9595BgObjects2= [];
gdjs.fase1Code.GDAnswer1_9595BgObjects3= [];
gdjs.fase1Code.GDcondiguracao_9595botaoObjects1= [];
gdjs.fase1Code.GDcondiguracao_9595botaoObjects2= [];
gdjs.fase1Code.GDcondiguracao_9595botaoObjects3= [];
gdjs.fase1Code.GDtabela_9595quizObjects1= [];
gdjs.fase1Code.GDtabela_9595quizObjects2= [];
gdjs.fase1Code.GDtabela_9595quizObjects3= [];
gdjs.fase1Code.GDcronometro_9595textoObjects1= [];
gdjs.fase1Code.GDcronometro_9595textoObjects2= [];
gdjs.fase1Code.GDcronometro_9595textoObjects3= [];
gdjs.fase1Code.GDeco_9595pontosObjects1= [];
gdjs.fase1Code.GDeco_9595pontosObjects2= [];
gdjs.fase1Code.GDeco_9595pontosObjects3= [];
gdjs.fase1Code.GDpontuacao_9595textoObjects1= [];
gdjs.fase1Code.GDpontuacao_9595textoObjects2= [];
gdjs.fase1Code.GDpontuacao_9595textoObjects3= [];
gdjs.fase1Code.GDAnswer2_9595BgObjects1= [];
gdjs.fase1Code.GDAnswer2_9595BgObjects2= [];
gdjs.fase1Code.GDAnswer2_9595BgObjects3= [];
gdjs.fase1Code.GDAnswer3_9595BgObjects1= [];
gdjs.fase1Code.GDAnswer3_9595BgObjects2= [];
gdjs.fase1Code.GDAnswer3_9595BgObjects3= [];
gdjs.fase1Code.GDiniciarObjects1= [];
gdjs.fase1Code.GDiniciarObjects2= [];
gdjs.fase1Code.GDiniciarObjects3= [];
gdjs.fase1Code.GDpersonagemObjects1= [];
gdjs.fase1Code.GDpersonagemObjects2= [];
gdjs.fase1Code.GDpersonagemObjects3= [];
gdjs.fase1Code.GDimagens_9595desafiosObjects1= [];
gdjs.fase1Code.GDimagens_9595desafiosObjects2= [];
gdjs.fase1Code.GDimagens_9595desafiosObjects3= [];
gdjs.fase1Code.GDtransi_95231_95227oObjects1= [];
gdjs.fase1Code.GDtransi_95231_95227oObjects2= [];
gdjs.fase1Code.GDtransi_95231_95227oObjects3= [];


gdjs.fase1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1_Bg"), gdjs.fase1Code.GDAnswer1_9595BgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer1_Button"), gdjs.fase1Code.GDAnswer1_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2_Bg"), gdjs.fase1Code.GDAnswer2_9595BgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2_Button"), gdjs.fase1Code.GDAnswer2_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3_Bg"), gdjs.fase1Code.GDAnswer3_9595BgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3_Button"), gdjs.fase1Code.GDAnswer3_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuestionText"), gdjs.fase1Code.GDQuestionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo"), gdjs.fase1Code.GDdialogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("eco_pontos"), gdjs.fase1Code.GDeco_9595pontosObjects1);
gdjs.copyArray(runtimeScene.getObjects("imagens_desafios"), gdjs.fase1Code.GDimagens_9595desafiosObjects1);
gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.fase1Code.GDiniciarObjects1);
gdjs.copyArray(runtimeScene.getObjects("inicio_botao"), gdjs.fase1Code.GDinicio_9595botaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("personagem"), gdjs.fase1Code.GDpersonagemObjects1);
gdjs.copyArray(runtimeScene.getObjects("pontuacao_texto"), gdjs.fase1Code.GDpontuacao_9595textoObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cronometroGlobal");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cronometro");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "esperarClique");
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "quiz_musica.mp3", 1, true, 40, 1);
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].setWrapping(true);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].setWrappingWidth(490);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("pergunta");
}
{for(var i = 0, len = gdjs.fase1Code.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDiniciarObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDinicio_9595botaoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDinicio_9595botaoObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595BgObjects1[i].setY(350);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595BgObjects1[i].setY(500);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595BgObjects1[i].setY(650);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].setY(425);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].setY(575);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].setY(725);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDQuestionTextObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDQuestionTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Question").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer1").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer2").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer3").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("dialogo_texto").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDpersonagemObjects1[i].getBehavior("Animation").setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("dialogo_personagem").getAsString());
}
}
{for(var i = 0, len = gdjs.fase1Code.GDpontuacao_9595textoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDpontuacao_9595textoObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDeco_9595pontosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDeco_9595pontosObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), null);
}
}
}

}


};gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer1_95959595ButtonObjects1Objects = Hashtable.newFrom({"Answer1_Button": gdjs.fase1Code.GDAnswer1_9595ButtonObjects1});
gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer2_95959595ButtonObjects1Objects = Hashtable.newFrom({"Answer2_Button": gdjs.fase1Code.GDAnswer2_9595ButtonObjects1});
gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer3_95959595ButtonObjects1Objects = Hashtable.newFrom({"Answer3_Button": gdjs.fase1Code.GDAnswer3_9595ButtonObjects1});
gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer1_95959595ButtonObjects1Objects = Hashtable.newFrom({"Answer1_Button": gdjs.fase1Code.GDAnswer1_9595ButtonObjects1});
gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer2_95959595ButtonObjects1Objects = Hashtable.newFrom({"Answer2_Button": gdjs.fase1Code.GDAnswer2_9595ButtonObjects1});
gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer3_95959595ButtonObjects1Objects = Hashtable.newFrom({"Answer3_Button": gdjs.fase1Code.GDAnswer3_9595ButtonObjects1});
gdjs.fase1Code.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1_Bg"), gdjs.fase1Code.GDAnswer1_9595BgObjects2);
gdjs.copyArray(gdjs.fase1Code.GDAnswer1_9595ButtonObjects1, gdjs.fase1Code.GDAnswer1_9595ButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("Answer2_Bg"), gdjs.fase1Code.GDAnswer2_9595BgObjects2);
gdjs.copyArray(gdjs.fase1Code.GDAnswer2_9595ButtonObjects1, gdjs.fase1Code.GDAnswer2_9595ButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("Answer3_Bg"), gdjs.fase1Code.GDAnswer3_9595BgObjects2);
gdjs.copyArray(gdjs.fase1Code.GDAnswer3_9595ButtonObjects1, gdjs.fase1Code.GDAnswer3_9595ButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("QuestionText"), gdjs.fase1Code.GDQuestionTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("dialogo"), gdjs.fase1Code.GDdialogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("imagens_desafios"), gdjs.fase1Code.GDimagens_9595desafiosObjects2);
gdjs.copyArray(runtimeScene.getObjects("pergunta_quiz"), gdjs.fase1Code.GDpergunta_9595quizObjects2);
gdjs.copyArray(runtimeScene.getObjects("personagem"), gdjs.fase1Code.GDpersonagemObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.fase1Code.GDQuestionTextObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDQuestionTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Question").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer1").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer2").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer3").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("dialogo_texto").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDpersonagemObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDpersonagemObjects2[i].getBehavior("Animation").setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("dialogo_personagem").getAsString());
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects2[i].setCenterXInScene((( gdjs.fase1Code.GDpergunta_9595quizObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDpergunta_9595quizObjects2[0].getCenterXInScene()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects2[i].setY(350);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595BgObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595BgObjects2[i].setY((( gdjs.fase1Code.GDimagens_9595desafiosObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDimagens_9595desafiosObjects2[0].getPointY("")) + (( gdjs.fase1Code.GDimagens_9595desafiosObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDimagens_9595desafiosObjects2[0].getHeight()) + 30);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595BgObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595BgObjects2[i].setY((( gdjs.fase1Code.GDAnswer1_9595BgObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer1_9595BgObjects2[0].getPointY("")) + 150);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595BgObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595BgObjects2[i].setY((( gdjs.fase1Code.GDAnswer1_9595BgObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer1_9595BgObjects2[0].getPointY("")) + 300);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects2[i].setY((( gdjs.fase1Code.GDAnswer1_9595BgObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer1_9595BgObjects2[0].getPointY("")) + 75);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects2[i].setY((( gdjs.fase1Code.GDAnswer2_9595BgObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer2_9595BgObjects2[0].getPointY("")) + 75);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects2[i].setY((( gdjs.fase1Code.GDAnswer3_9595BgObjects2.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer3_9595BgObjects2[0].getPointY("")) + 75);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Answer1_Bg"), gdjs.fase1Code.GDAnswer1_9595BgObjects1);
/* Reuse gdjs.fase1Code.GDAnswer1_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Answer2_Bg"), gdjs.fase1Code.GDAnswer2_9595BgObjects1);
/* Reuse gdjs.fase1Code.GDAnswer2_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Answer3_Bg"), gdjs.fase1Code.GDAnswer3_9595BgObjects1);
/* Reuse gdjs.fase1Code.GDAnswer3_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("dialogo"), gdjs.fase1Code.GDdialogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("eco_pontos"), gdjs.fase1Code.GDeco_9595pontosObjects1);
gdjs.copyArray(runtimeScene.getObjects("imagens_desafios"), gdjs.fase1Code.GDimagens_9595desafiosObjects1);
gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.fase1Code.GDiniciarObjects1);
gdjs.copyArray(runtimeScene.getObjects("personagem"), gdjs.fase1Code.GDpersonagemObjects1);
gdjs.copyArray(runtimeScene.getObjects("pontuacao_texto"), gdjs.fase1Code.GDpontuacao_9595textoObjects1);
{for(var i = 0, len = gdjs.fase1Code.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDpersonagemObjects1[i].getBehavior("Animation").setAnimationName("eco");
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("acertoTexto").getAsString()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("feedback");
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].activateBehavior("ButtonFSM", false);
}
for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].activateBehavior("ButtonFSM", false);
}
for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].activateBehavior("ButtonFSM", false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "esperarClique");
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595BgObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595BgObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595BgObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDiniciarObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDiniciarObjects1[i].setX(gdjs.evtTools.window.getWindowInnerWidth() * 0.5 + (gdjs.fase1Code.GDiniciarObjects1[i].getWidth()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDpontuacao_9595textoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDpontuacao_9595textoObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDeco_9595pontosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDeco_9595pontosObjects1[i].getBehavior("RollingCounter").SetValue(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), null);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.fase1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.fase1Code.GDAnswer1_9595ButtonObjects1, gdjs.fase1Code.GDAnswer1_9595ButtonObjects2);

gdjs.copyArray(gdjs.fase1Code.GDAnswer2_9595ButtonObjects1, gdjs.fase1Code.GDAnswer2_9595ButtonObjects2);

gdjs.copyArray(gdjs.fase1Code.GDAnswer3_9595ButtonObjects1, gdjs.fase1Code.GDAnswer3_9595ButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.fase1Code.GDAnswer3_9595ButtonObjects2.length === 0 ) ? (( gdjs.fase1Code.GDAnswer2_9595ButtonObjects2.length === 0 ) ? (( gdjs.fase1Code.GDAnswer1_9595ButtonObjects2.length === 0 ) ? "" :gdjs.fase1Code.GDAnswer1_9595ButtonObjects2[0].getName()) :gdjs.fase1Code.GDAnswer2_9595ButtonObjects2[0].getName()) :gdjs.fase1Code.GDAnswer3_9595ButtonObjects2[0].getName()) != runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("CorrectAnswer").getAsString() + "_Button");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogo"), gdjs.fase1Code.GDdialogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("personagem"), gdjs.fase1Code.GDpersonagemObjects2);
gdjs.copyArray(runtimeScene.getObjects("pontuacao_texto"), gdjs.fase1Code.GDpontuacao_9595textoObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong", false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 25));
}
{for(var i = 0, len = gdjs.fase1Code.GDpontuacao_9595textoObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDpontuacao_9595textoObjects2[i].getBehavior("RollingCounter").SetValue(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDpersonagemObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDpersonagemObjects2[i].getBehavior("Animation").setAnimationName("byte");
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("erroTexto").getAsString()));
}
}
}

}


{

/* Reuse gdjs.fase1Code.GDAnswer1_9595ButtonObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer2_9595ButtonObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer3_9595ButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length === 0 ) ? (( gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length === 0 ) ? (( gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length === 0 ) ? "" :gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[0].getName()) :gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[0].getName()) :gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[0].getName()) == runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("CorrectAnswer").getAsString() + "_Button");
}
if (isConditionTrue_0) {
/* Reuse gdjs.fase1Code.GDAnswer1_9595ButtonObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer2_9595ButtonObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer3_9595ButtonObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Right", false, 80, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(Math.ceil(Math.abs(100 - 30 * gdjs.evtTools.common.log10(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "cronometro") + 1))));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(Math.ceil(Math.abs(20 * gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / 10 + 1))));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cronometro");
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer1_95959595ButtonObjects1Objects);
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer2_95959595ButtonObjects1Objects);
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer3_95959595ButtonObjects1Objects);
}

{ //Subevents
gdjs.fase1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.fase1Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer1_Button"), gdjs.fase1Code.GDAnswer1_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2_Button"), gdjs.fase1Code.GDAnswer2_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3_Button"), gdjs.fase1Code.GDAnswer3_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer1_95959595ButtonObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[k] = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer2_95959595ButtonObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[k] = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDAnswer3_95959595ButtonObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[k] = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "pergunta");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.fase1Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDiniciarObjects1Objects = Hashtable.newFrom({"iniciar": gdjs.fase1Code.GDiniciarObjects1});
gdjs.fase1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() <= 60);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("ach_sintonia").setBoolean(true);
}
}

}


};gdjs.fase1Code.eventsList5 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuestionText"), gdjs.fase1Code.GDQuestionTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("inicio_botao"), gdjs.fase1Code.GDinicio_9595botaoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("fim");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "cronometroGlobal");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "cronometroGlobal"))));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
{for(var i = 0, len = gdjs.fase1Code.GDQuestionTextObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDQuestionTextObjects2[i].getBehavior("Text").setText("Quiz Completo!");
}
}
{for(var i = 0, len = gdjs.fase1Code.GDinicio_9595botaoObjects2.length ;i < len;++i) {
    gdjs.fase1Code.GDinicio_9595botaoObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.fase1Code.eventsList4(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.fase1Code.GDAnswer1_9595BgObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer1_9595ButtonObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer2_9595BgObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer2_9595ButtonObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer3_9595BgObjects1 */
/* Reuse gdjs.fase1Code.GDAnswer3_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("QuestionText"), gdjs.fase1Code.GDQuestionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogo"), gdjs.fase1Code.GDdialogoObjects1);
/* Reuse gdjs.fase1Code.GDimagens_9595desafiosObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pergunta_quiz"), gdjs.fase1Code.GDpergunta_9595quizObjects1);
gdjs.copyArray(runtimeScene.getObjects("personagem"), gdjs.fase1Code.GDpersonagemObjects1);
{for(var i = 0, len = gdjs.fase1Code.GDQuestionTextObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDQuestionTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Question").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer1").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer2").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("Answer3").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.toUpperCase(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("dialogo_texto").getAsString()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDpersonagemObjects1[i].getBehavior("Animation").setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("dialogo_personagem").getAsString());
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - 1);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].setCenterXInScene((( gdjs.fase1Code.GDpergunta_9595quizObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDpergunta_9595quizObjects1[0].getCenterXInScene()));
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].setY(350);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595BgObjects1[i].setY((( gdjs.fase1Code.GDimagens_9595desafiosObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDimagens_9595desafiosObjects1[0].getPointY("")) + (( gdjs.fase1Code.GDimagens_9595desafiosObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDimagens_9595desafiosObjects1[0].getHeight()) + 30);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595BgObjects1[i].setY((( gdjs.fase1Code.GDAnswer1_9595BgObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer1_9595BgObjects1[0].getPointY("")) + 150);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595BgObjects1[i].setY((( gdjs.fase1Code.GDAnswer1_9595BgObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer1_9595BgObjects1[0].getPointY("")) + 300);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].setY((( gdjs.fase1Code.GDAnswer1_9595BgObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer1_9595BgObjects1[0].getPointY("")) + 75);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].setY((( gdjs.fase1Code.GDAnswer2_9595BgObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer2_9595BgObjects1[0].getPointY("")) + 75);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].setY((( gdjs.fase1Code.GDAnswer3_9595BgObjects1.length === 0 ) ? 0 :gdjs.fase1Code.GDAnswer3_9595BgObjects1[0].getPointY("")) + 75);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].activateBehavior("ButtonFSM", true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setString("pergunta");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cronometro");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.fase1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("iniciar"), gdjs.fase1Code.GDiniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDiniciarObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDiniciarObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDiniciarObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDiniciarObjects1[k] = gdjs.fase1Code.GDiniciarObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDiniciarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "feedback");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "esperarClique") > 0.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Answer1_Bg"), gdjs.fase1Code.GDAnswer1_9595BgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer1_Button"), gdjs.fase1Code.GDAnswer1_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2_Bg"), gdjs.fase1Code.GDAnswer2_9595BgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2_Button"), gdjs.fase1Code.GDAnswer2_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3_Bg"), gdjs.fase1Code.GDAnswer3_9595BgObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer3_Button"), gdjs.fase1Code.GDAnswer3_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("imagens_desafios"), gdjs.fase1Code.GDimagens_9595desafiosObjects1);
/* Reuse gdjs.fase1Code.GDiniciarObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.fase1Code.GDiniciarObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDiniciarObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595ButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer1_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer1_9595BgObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer2_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer2_9595BgObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDAnswer3_9595BgObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDAnswer3_9595BgObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDimagens_9595desafiosObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDimagens_9595desafiosObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.fase1Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDinicio_95959595botaoObjects1Objects = Hashtable.newFrom({"inicio_botao": gdjs.fase1Code.GDinicio_9595botaoObjects1});
gdjs.fase1Code.asyncCallback22024428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.fase1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Inicial", false);
}
gdjs.fase1Code.localVariables.length = 0;
}
gdjs.fase1Code.idToCallbackMap.set(22024428, gdjs.fase1Code.asyncCallback22024428);
gdjs.fase1Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.fase1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.fase1Code.asyncCallback22024428(runtimeScene, asyncObjectsList)), 22024428, asyncObjectsList);
}
}

}


};gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDdialogoObjects1Objects = Hashtable.newFrom({"dialogo": gdjs.fase1Code.GDdialogoObjects1});
gdjs.fase1Code.eventsList8 = function(runtimeScene) {

{


gdjs.fase1Code.eventsList0(runtimeScene);
}


{


gdjs.fase1Code.eventsList3(runtimeScene);
}


{


gdjs.fase1Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("inicio_botao"), gdjs.fase1Code.GDinicio_9595botaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDinicio_9595botaoObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDinicio_9595botaoObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDinicio_95959595botaoObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDinicio_9595botaoObjects1[k] = gdjs.fase1Code.GDinicio_9595botaoObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDinicio_9595botaoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == "fim");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.sound.getMusicOnChannelPlayingOffset(runtimeScene, 1));
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}

{ //Subevents
gdjs.fase1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cronometro_texto"), gdjs.fase1Code.GDcronometro_9595textoObjects1);
{for(var i = 0, len = gdjs.fase1Code.GDcronometro_9595textoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDcronometro_9595textoObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "cronometroGlobal"))), null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dialogo"), gdjs.fase1Code.GDdialogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDdialogoObjects1.length;i<l;++i) {
    if ( gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("ButtonFSM").IsClicked(gdjs.fase1Code.mapOfGDgdjs_9546fase1Code_9546GDdialogoObjects1Objects, null) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDdialogoObjects1[k] = gdjs.fase1Code.GDdialogoObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDdialogoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.fase1Code.GDdialogoObjects1.length;i<l;++i) {
    if ( !(gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("AutoTyping").IsFinished(null)) ) {
        isConditionTrue_0 = true;
        gdjs.fase1Code.GDdialogoObjects1[k] = gdjs.fase1Code.GDdialogoObjects1[i];
        ++k;
    }
}
gdjs.fase1Code.GDdialogoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.fase1Code.GDdialogoObjects1 */
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("AutoTyping").RestartFromBeginning(null);
}
}
{for(var i = 0, len = gdjs.fase1Code.GDdialogoObjects1.length ;i < len;++i) {
    gdjs.fase1Code.GDdialogoObjects1[i].getBehavior("AutoTyping").ShowFullText(null);
}
}
}

}


};

gdjs.fase1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length = 0;
gdjs.fase1Code.GDAnswer1_9595ButtonObjects2.length = 0;
gdjs.fase1Code.GDAnswer1_9595ButtonObjects3.length = 0;
gdjs.fase1Code.GDQuestionTextObjects1.length = 0;
gdjs.fase1Code.GDQuestionTextObjects2.length = 0;
gdjs.fase1Code.GDQuestionTextObjects3.length = 0;
gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length = 0;
gdjs.fase1Code.GDAnswer2_9595ButtonObjects2.length = 0;
gdjs.fase1Code.GDAnswer2_9595ButtonObjects3.length = 0;
gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length = 0;
gdjs.fase1Code.GDAnswer3_9595ButtonObjects2.length = 0;
gdjs.fase1Code.GDAnswer3_9595ButtonObjects3.length = 0;
gdjs.fase1Code.GDdialogo_9595fundoObjects1.length = 0;
gdjs.fase1Code.GDdialogo_9595fundoObjects2.length = 0;
gdjs.fase1Code.GDdialogo_9595fundoObjects3.length = 0;
gdjs.fase1Code.GDpergunta_9595quizObjects1.length = 0;
gdjs.fase1Code.GDpergunta_9595quizObjects2.length = 0;
gdjs.fase1Code.GDpergunta_9595quizObjects3.length = 0;
gdjs.fase1Code.GDdialogoObjects1.length = 0;
gdjs.fase1Code.GDdialogoObjects2.length = 0;
gdjs.fase1Code.GDdialogoObjects3.length = 0;
gdjs.fase1Code.GDinicio_9595botaoObjects1.length = 0;
gdjs.fase1Code.GDinicio_9595botaoObjects2.length = 0;
gdjs.fase1Code.GDinicio_9595botaoObjects3.length = 0;
gdjs.fase1Code.GDnome_9595desafioObjects1.length = 0;
gdjs.fase1Code.GDnome_9595desafioObjects2.length = 0;
gdjs.fase1Code.GDnome_9595desafioObjects3.length = 0;
gdjs.fase1Code.GDbackgroundObjects1.length = 0;
gdjs.fase1Code.GDbackgroundObjects2.length = 0;
gdjs.fase1Code.GDbackgroundObjects3.length = 0;
gdjs.fase1Code.GDAnswer1_9595BgObjects1.length = 0;
gdjs.fase1Code.GDAnswer1_9595BgObjects2.length = 0;
gdjs.fase1Code.GDAnswer1_9595BgObjects3.length = 0;
gdjs.fase1Code.GDcondiguracao_9595botaoObjects1.length = 0;
gdjs.fase1Code.GDcondiguracao_9595botaoObjects2.length = 0;
gdjs.fase1Code.GDcondiguracao_9595botaoObjects3.length = 0;
gdjs.fase1Code.GDtabela_9595quizObjects1.length = 0;
gdjs.fase1Code.GDtabela_9595quizObjects2.length = 0;
gdjs.fase1Code.GDtabela_9595quizObjects3.length = 0;
gdjs.fase1Code.GDcronometro_9595textoObjects1.length = 0;
gdjs.fase1Code.GDcronometro_9595textoObjects2.length = 0;
gdjs.fase1Code.GDcronometro_9595textoObjects3.length = 0;
gdjs.fase1Code.GDeco_9595pontosObjects1.length = 0;
gdjs.fase1Code.GDeco_9595pontosObjects2.length = 0;
gdjs.fase1Code.GDeco_9595pontosObjects3.length = 0;
gdjs.fase1Code.GDpontuacao_9595textoObjects1.length = 0;
gdjs.fase1Code.GDpontuacao_9595textoObjects2.length = 0;
gdjs.fase1Code.GDpontuacao_9595textoObjects3.length = 0;
gdjs.fase1Code.GDAnswer2_9595BgObjects1.length = 0;
gdjs.fase1Code.GDAnswer2_9595BgObjects2.length = 0;
gdjs.fase1Code.GDAnswer2_9595BgObjects3.length = 0;
gdjs.fase1Code.GDAnswer3_9595BgObjects1.length = 0;
gdjs.fase1Code.GDAnswer3_9595BgObjects2.length = 0;
gdjs.fase1Code.GDAnswer3_9595BgObjects3.length = 0;
gdjs.fase1Code.GDiniciarObjects1.length = 0;
gdjs.fase1Code.GDiniciarObjects2.length = 0;
gdjs.fase1Code.GDiniciarObjects3.length = 0;
gdjs.fase1Code.GDpersonagemObjects1.length = 0;
gdjs.fase1Code.GDpersonagemObjects2.length = 0;
gdjs.fase1Code.GDpersonagemObjects3.length = 0;
gdjs.fase1Code.GDimagens_9595desafiosObjects1.length = 0;
gdjs.fase1Code.GDimagens_9595desafiosObjects2.length = 0;
gdjs.fase1Code.GDimagens_9595desafiosObjects3.length = 0;
gdjs.fase1Code.GDtransi_95231_95227oObjects1.length = 0;
gdjs.fase1Code.GDtransi_95231_95227oObjects2.length = 0;
gdjs.fase1Code.GDtransi_95231_95227oObjects3.length = 0;

gdjs.fase1Code.eventsList8(runtimeScene);
gdjs.fase1Code.GDAnswer1_9595ButtonObjects1.length = 0;
gdjs.fase1Code.GDAnswer1_9595ButtonObjects2.length = 0;
gdjs.fase1Code.GDAnswer1_9595ButtonObjects3.length = 0;
gdjs.fase1Code.GDQuestionTextObjects1.length = 0;
gdjs.fase1Code.GDQuestionTextObjects2.length = 0;
gdjs.fase1Code.GDQuestionTextObjects3.length = 0;
gdjs.fase1Code.GDAnswer2_9595ButtonObjects1.length = 0;
gdjs.fase1Code.GDAnswer2_9595ButtonObjects2.length = 0;
gdjs.fase1Code.GDAnswer2_9595ButtonObjects3.length = 0;
gdjs.fase1Code.GDAnswer3_9595ButtonObjects1.length = 0;
gdjs.fase1Code.GDAnswer3_9595ButtonObjects2.length = 0;
gdjs.fase1Code.GDAnswer3_9595ButtonObjects3.length = 0;
gdjs.fase1Code.GDdialogo_9595fundoObjects1.length = 0;
gdjs.fase1Code.GDdialogo_9595fundoObjects2.length = 0;
gdjs.fase1Code.GDdialogo_9595fundoObjects3.length = 0;
gdjs.fase1Code.GDpergunta_9595quizObjects1.length = 0;
gdjs.fase1Code.GDpergunta_9595quizObjects2.length = 0;
gdjs.fase1Code.GDpergunta_9595quizObjects3.length = 0;
gdjs.fase1Code.GDdialogoObjects1.length = 0;
gdjs.fase1Code.GDdialogoObjects2.length = 0;
gdjs.fase1Code.GDdialogoObjects3.length = 0;
gdjs.fase1Code.GDinicio_9595botaoObjects1.length = 0;
gdjs.fase1Code.GDinicio_9595botaoObjects2.length = 0;
gdjs.fase1Code.GDinicio_9595botaoObjects3.length = 0;
gdjs.fase1Code.GDnome_9595desafioObjects1.length = 0;
gdjs.fase1Code.GDnome_9595desafioObjects2.length = 0;
gdjs.fase1Code.GDnome_9595desafioObjects3.length = 0;
gdjs.fase1Code.GDbackgroundObjects1.length = 0;
gdjs.fase1Code.GDbackgroundObjects2.length = 0;
gdjs.fase1Code.GDbackgroundObjects3.length = 0;
gdjs.fase1Code.GDAnswer1_9595BgObjects1.length = 0;
gdjs.fase1Code.GDAnswer1_9595BgObjects2.length = 0;
gdjs.fase1Code.GDAnswer1_9595BgObjects3.length = 0;
gdjs.fase1Code.GDcondiguracao_9595botaoObjects1.length = 0;
gdjs.fase1Code.GDcondiguracao_9595botaoObjects2.length = 0;
gdjs.fase1Code.GDcondiguracao_9595botaoObjects3.length = 0;
gdjs.fase1Code.GDtabela_9595quizObjects1.length = 0;
gdjs.fase1Code.GDtabela_9595quizObjects2.length = 0;
gdjs.fase1Code.GDtabela_9595quizObjects3.length = 0;
gdjs.fase1Code.GDcronometro_9595textoObjects1.length = 0;
gdjs.fase1Code.GDcronometro_9595textoObjects2.length = 0;
gdjs.fase1Code.GDcronometro_9595textoObjects3.length = 0;
gdjs.fase1Code.GDeco_9595pontosObjects1.length = 0;
gdjs.fase1Code.GDeco_9595pontosObjects2.length = 0;
gdjs.fase1Code.GDeco_9595pontosObjects3.length = 0;
gdjs.fase1Code.GDpontuacao_9595textoObjects1.length = 0;
gdjs.fase1Code.GDpontuacao_9595textoObjects2.length = 0;
gdjs.fase1Code.GDpontuacao_9595textoObjects3.length = 0;
gdjs.fase1Code.GDAnswer2_9595BgObjects1.length = 0;
gdjs.fase1Code.GDAnswer2_9595BgObjects2.length = 0;
gdjs.fase1Code.GDAnswer2_9595BgObjects3.length = 0;
gdjs.fase1Code.GDAnswer3_9595BgObjects1.length = 0;
gdjs.fase1Code.GDAnswer3_9595BgObjects2.length = 0;
gdjs.fase1Code.GDAnswer3_9595BgObjects3.length = 0;
gdjs.fase1Code.GDiniciarObjects1.length = 0;
gdjs.fase1Code.GDiniciarObjects2.length = 0;
gdjs.fase1Code.GDiniciarObjects3.length = 0;
gdjs.fase1Code.GDpersonagemObjects1.length = 0;
gdjs.fase1Code.GDpersonagemObjects2.length = 0;
gdjs.fase1Code.GDpersonagemObjects3.length = 0;
gdjs.fase1Code.GDimagens_9595desafiosObjects1.length = 0;
gdjs.fase1Code.GDimagens_9595desafiosObjects2.length = 0;
gdjs.fase1Code.GDimagens_9595desafiosObjects3.length = 0;
gdjs.fase1Code.GDtransi_95231_95227oObjects1.length = 0;
gdjs.fase1Code.GDtransi_95231_95227oObjects2.length = 0;
gdjs.fase1Code.GDtransi_95231_95227oObjects3.length = 0;


return;

}

gdjs['fase1Code'] = gdjs.fase1Code;
