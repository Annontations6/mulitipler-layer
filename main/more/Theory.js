import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "Confrim?";
var name = "Mulitipler Layer";
var description = "when do winner this game. \n\n-----Changelog----- \nv1.2: \nPrivate Function bulid. \nV1.1: \nAdd Mulitipler Killing \nV1.0:\nRelease.";
var authors = "Annontations6";
var version = 1.2;

var currency, currency2;
var c1, c2, c3, c4, confirm0;
var c1Exp, c2Exp;

var achievement1, achievement2;
var chapter1, chapter2;

var init = () => {
    currency = theory.createCurrency();
    currency2 = theory.createCurrency();

    currency2.value = 2;
    currency.value = 1;

    ///////////////////
    // Regular Upgrades

    // c1
    {
        let getDesc = (level) => "c_1=1.15^{" + level + "}";
        let getInfo = (level) => "c_1=" + getC2(level).toString(0);
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(1, Math.log2(1.17))));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getInfo(c1.level), getInfo(c1.level + amount));
    } 

    // c2
    {
        let getDesc = (level) => "c_2=1.5^{" + level + "}";
        let getInfo = (level) => "c_2=" + getC2(level).toString(0);
        c2 = theory.createUpgrade(1, currency, new ExponentialCost(5, Math.log2(1.62)));
        c2.getDescription = (_) => Utils.getMath(getDesc(c2.level));
        c2.getInfo = (amount) => Utils.getMathTo(getInfo(c2.level), getInfo(c2.level + amount));
    }

    // c3
    {
        let getDesc = (level) => "c_3=2^{" + level + "}";
        let getInfo = (level) => "c_3=" + getC3(level).toString(0);
        c3 = theory.createUpgrade(2, currency, new ExponentialCost(48, Math.log2(2.12)));
        c3.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        c3.getInfo = (amount) => Utils.getMathTo(getInfo(c3.level), getInfo(c3.level + amount));
    }

    // c4
    {
        let getDesc = (level) => "c_4=4^{" + level + "}";
        let getInfo = (level) => "c_4=" + getC4(level).toString(0);
        c4 = theory.createUpgrade(3, currency, new ExponentialCost(192, Math.log2(2.12)));
        c4.getDescription = (_) => Utils.getMath(getDesc(c4.level));
        c4.getInfo = (amount) => Utils.getMathTo(getInfo(c4.level), getInfo(c4.level + amount));
    }

    // confrim
    {
        let getDesc = (level) => "confrim=2^{" + level + "}";
        let getInfo = (level) => "confrim=" + getCONFRIM(level).toString(0);
        confirm0 = theory.createUpgrade(4, currency, new ExponentialCost(50, Math.log2(2.16)));
        confirm0.getDescription = (_) => Utils.getMath(getDesc(confirm0.level));
        confirm0.getInfo = (amount) => Utils.getMathTo(getInfo(confirm0.level), getInfo(confirm0.level + amount));
    }
    
    // c5
    {
        let getDesc = (level) => "c_5=2^{" + level + "}";
        let getInfo = (level) => "c_5=" + getCONFRIM(level).toString(0);
        c5 = theory.createUpgrade(5, currency, new ExponentialCost(1e5, Math.log2(2.16)));
        c5.getDescription = (_) => Utils.getMath(getDesc(c5.level));
        c5.getInfo = (amount) => Utils.getMathTo(getInfo(c5.level), getInfo(c5.level + amount));
        c5.maxLevel = 1;
    }

    /////////////////////
    // Permanent Upgrades
    theory.createBuyAllUpgrade(0, currency, 1000);
    theory.createAutoBuyerUpgrade(1, currency, 1e8);

    ///////////////////////
    //// Milestone Upgrades
    theory.setMilestoneCost(new LinearCost(25, 25));

    {
        c1Exp = theory.createMilestoneUpgrade(0, 3);
        c1Exp.description = Localization.getUpgradeIncCustomExpDesc("c_1", "0.05");
        c1Exp.info = Localization.getUpgradeIncCustomExpInfo("c_1", "0.05");
        c1Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c2Exp = theory.createMilestoneUpgrade(1, 3);
        c2Exp.description = Localization.getUpgradeIncCustomExpDesc("c_2", "0.05");
        c2Exp.info = Localization.getUpgradeIncCustomExpInfo("c_2", "0.05");
        c2Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
    
    /////////////////
    //// Achievements
    achievement1 = theory.createAchievement(0, "You Played!", "have this get for names!", () => true);
    achievement2 = theory.createAchievement(1, "beta", "layer 2", () => currency.value > 1);
    achievement3 = theory.createAchievement(2, "gamma", "layer 3", () => currency.value > 2);
    achievement4 = theory.createAchievement(3, "delta", "layer 4", () => currency.value > 3);
    achievement5 = theory.createAchievement(4, "epilsion", "layer 5", () => currency.value > 4);
    achievement6 = theory.createAchievement(5, "zeta", "layer 6", () => currency.value > 5);
    achievement7 = theory.createAchievement(6, "eta", "layer 8", () => currency.value > 6);
    achievement8 = theory.createAchievement(7, "theta", "layer 9", () => currency.value > 7);
    achievement9 = theory.createAchievement(8, "iota", "layer 10", () => currency.value > 8);
    achievement10 = theory.createAchievement(9, "kappa", "layer 11", () => currency.value > 9);
    achievement11 = theory.createAchievement(10, "15 layer", "layer 15", () => currency.value > 14);
    achievement12 = theory.createAchievement(11, "20 layer", "layer 20", () => currency.value > 19);
    achievement13 = theory.createAchievement(12, "when in", "hey hey icon this called ordinal markup on omega layers!", () => currency.value > 23);
    achievement14 = theory.createAchievement(13, "starting out uppercases", "layer 25", () => currency.value > 24);
    achievement15 = theory.createAchievement(14, "30 layer", "layer 30", () => currency.value > 29);
    achievement16 = theory.createAchievement(15, "36 funny layer", "layer 36", () => currency.value > 35);
    achievement17 = theory.createAchievement(16, "40 layer", "layer 40", () => currency.value > 39);
    achievement18 = theory.createAchievement(17, "45 layer", "layer 45", () => currency.value > 44);
    achievement19 = theory.createAchievement(18, "when in cooled!", "hey hey icon called this omega layer game!", () => currency.value > 47);
    achievement20 = theory.createAchievement(19, "50 layer", "layer 50", () => currency.value > 49);
    achievement21 = theory.createAchievement(20, "60 layer", "layer 60", () => currency.value > 59);
    achievement22 = theory.createAchievement(21, "69 funny lol layer", "layer 69", () => currency.value > 69);
    achievement23 = theory.createAchievement(22, "80 layer", "layer 80", () => currency.value > 79);
    achievement24 = theory.createAchievement(23, "90 layer", "layer 90", () => currency.value > 89);
    achievement25 = theory.createAchievement(24, "order psi", "layer 96", () => currency.value > 95);
    achievement26 = theory.createAchievement(25, "100 layer", "hundred hundred hundred (numbers 1 to 100)", () => currency.value > 99);
    achievement27 = theory.createAchievement(26, "one and half hundred layer", "layer 150", () => currency.value > 149);
    achievement28 = theory.createAchievement(27, "200 layer", "layer 200", () => currency.value > 199);
    achievement29 = theory.createAchievement(28, "triple two layer", "layer 222", () => currency.value > 221);
    achievement30 = theory.createAchievement(29, "1/4 thousand layer", "layer 250", () => currency.value > 249);
    achievement31 = theory.createAchievement(30, "lelelelele layer", "layer 269", () => currency.value > 268);
    achievement32 = theory.createAchievement(31, "special mariobox scratch layer", "layer 300", () => currency.value > 299);
    achievement33 = theory.createAchievement(32, "Level 5 tile * 10 layer", "layer 320", () => currency.value > 319);
    achievement34 = theory.createAchievement(33, "350 layer", "layer 150", () => currency.value > 349);
    achievement35 = theory.createAchievement(34, "funny*10 layer", "layer 360", () => currency.value > 359);
    achievement36 = theory.createAchievement(35, "396 layer", "layer 396", () => currency.value > 395);
    achievement37 = theory.createAchievement(36, "i think?", "we reach 400 layer (somehow?)", () => currency.value > 399);
    achievement38 = theory.createAchievement(37, "not found layer", "layer 404", () => currency.value > 403);
    achievement39 = theory.createAchievement(38, "returning 436 funny", "layer 436", () => currency.value > 435);
    achievement40 = theory.createAchievement(39, "450 layers i think?", "layer 450", () => currency.value > 449);
    achievement41 = theory.createAchievement(40, "max name omega layers!", "layer 480", () => currency.value > 479);
    achievement42 = theory.createAchievement(41, "aplha power aplha", "layer 481", () => currency.value > 480);
    achievement43 = theory.createAchievement(42, "500 layer", "layer 450", () => currency.value > 499);
    achievement44 = theory.createAchievement(43, "server is down layer", "layer 521", () => currency.value > 520);
    achievement45 = theory.createAchievement(44, "timed out layer", "layer 522", () => currency.value > 521);
    achievement46 = theory.createAchievement(45, "750 layer is 250 more", "layer 750", () => currency.value > 749);
    achievement47 = theory.createAchievement(46, "i thousand!", "thousand called notations of 1000 for 1e3 (done)", () => currency.value > 999);
    achievement48 = theory.createAchievement(47, "1,000 + 500 layer", "layer 1500", () => currency.value > 1499);
    achievement49 = theory.createAchievement(48, "i gray theme night all planets", "layer 1998", () => currency.value > 1997);
    achievement50 = theory.createAchievement(49, "thousand + thousand", "i layer two thousand!", () => currency.value > 1999);
    achievement51 = theory.createAchievement(50, "youtube created!", "layer 2005", () => currency.value > 2004);
    achievement52 = theory.createAchievement(51, "youtube 3 years age created!", "3 years of 2005", () => currency.value > 2007);
    achievement53 = theory.createAchievement(52, "vebles simuls layer!", "layer 2012", () => currency.value > 2011);
    achievement54 = theory.createAchievement(53, "zfont i hi release!", "layer 2018", () => currency.value > 2017);
    achievement55 = theory.createAchievement(54, "year Outdated", "layer 2019", () => currency.value > 2018);
    achievement56 = theory.createAchievement(55, "twenty twenty", "double twenty!?!?!?!?", () => currency.value > 2019);
    achievement57 = theory.createAchievement(56, "I A CURRENT YEAR!", "LAYER 2022 YES!", () => currency.value > 2021);
    achievement58 = theory.createAchievement(57, "Next Year", "layer 2023", () => currency.value > 2022);
    achievement59 = theory.createAchievement(58, "i game updated 2048!", "level 11 tile! so game!", () => currency.value > 2047);
    achievement60 = theory.createAchievement(59, "5000", "five thousand", () => currency.value > 4999);
    achievement61 = theory.createAchievement(60, "10000", "while?", () => currency.value > 9999);
    achievement62 = theory.createAchievement(61, "50000", "while?", () => currency.value > 49999);
    achievement63 = theory.createAchievement(62, "10000", "while?", () => currency.value > 99999);
    achievement64 = theory.createAchievement(63, "500000", "while?", () => currency.value > 499999);
    achievement65 = theory.createAchievement(64, "1M", "while?", () => currency.value > 999999);
    achievement66 = theory.createAchievement(65, "5M", "while?", () => currency.value > 4999999);
    achievement67 = theory.createAchievement(66, "10M", "while?", () => currency.value > 1e7);
    achievement68 = theory.createAchievement(67, "50M", "while?", () => currency.value > 5e7);
    achievement69 = theory.createAchievement(68, "100M", "while?", () => currency.value > 1e8);
    achievement70 = theory.createAchievement(69, "500M", "while?", () => currency.value > 5e8);
    achievement71 = theory.createAchievement(70, "I NEVER ENDS", "reach layer 1e10", () => currency.value > 1e10);
    achievement72 = theory.createAchievement(71, "Layer of Layers!", "reach layer 1e24", () => currency.value > 1e24);
    achievement73 = theory.createAchievement(72, "NiCe!", "reach layer 1e69", () => currency.value > 1e69);
    achievement74 = theory.createAchievement(73, "I TURLY NEVER ENDS", "reach layer 1e100", () => currency.value > 1e100);
    achievement75 = theory.createSecretAchievement(74, "Pi-Illion", "Reach layer 2659365073.96", "cant be 1000^pi?", () => currency.value > 2659365073.96);

    ///////////////////
    //// Story chapters
    chapter1 = theory.createStoryChapter(0, "Mulit", "aaa \naaaa \naaaaa", () => c1.level > 0);
    chapter2 = theory.createStoryChapter(1, "probems?", "Probems do this file and go \naaaa \naaaaa", () => c2.level > 0);
    chapter3 = theory.createStoryChapter(2, "what hh", "while do: true == true (somehow?) \nbe \nAaaaaa \nthis platform \ngo spect!", () => c2.level > 2);

    updateAvailability();
}

var updateAvailability = () => {
    c2Exp.isAvailable = c1Exp.level > 0;
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency2.value *= getC1(c1.level) * getC2(c2.level) * getC3(c3.level) * getC4(c4.level) * getC5(c5.level);
    if (currency2.value > 1e24) {
       currency2.value = BigNumber.TWO;
       currency.value += getCONFRIM(confirm0.level) * getC5(c5.level);
    }
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = c_1";

    if (c1Exp.level == 1) result += "^{1.05}";
    if (c1Exp.level == 2) result += "^{1.1}";
    if (c1Exp.level == 3) result += "^{1.15}";

    result += "c_2";

    if (c2Exp.level == 1) result += "^{1.05}";
    if (c2Exp.level == 2) result += "^{1.1}";
    if (c2Exp.level == 3) result += "^{1.15}";

    return result;
}

var getSecondaryEquation = () => theory.latexSymbol + "=\\max\\rho";
var getPublicationMultiplier = (tau) => tau.pow(0.223) / BigNumber.THREE;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{0.223}}{3}";
var getTau = () => currency2.value;
var get2DGraphValue = () => 1;

var getC1 = (level) => BigNumber.from(1.15).pow(level);
var getC2 = (level) => BigNumber.from(1.5).pow(level);
var getC3 = (level) => BigNumber.TWO.pow(level);
var getC4 = (level) => BigNumber.from(4).pow(level);
var getCONFRIM = (level) => BigNumber.TWO.pow(level);
var getC5 = (level) => BigNumber.TWO.pow(level);
var getC1Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC2Exponent = (level) => BigNumber.from(1 + 0.05 * level);

init();
