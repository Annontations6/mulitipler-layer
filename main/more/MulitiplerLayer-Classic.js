import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "ConfrimClassic?";
var name = "Mulitipler Layer (Classic)";
var description = "coming soon...";
var authors = "Annontations6";
var version = 1;

var currency, currency2;
var c1, c2, c3, c4, confirm0, c5;
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
        let getInfo = (level) => "c_5=" + getC5(level).toString(0);
        c5 = theory.createUpgrade(5, currency, new ExponentialCost(1e5, Math.log2(1e20)));
        c5.getDescription = (_) => Utils.getMath(getDesc(c5.level));
        c5.getInfo = (amount) => Utils.getMathTo(getInfo(c5.level), getInfo(c5.level + amount));
        c5.maxLevel = 2;
    }

    /////////////////////
    // Permanent Upgrades
    theory.createBuyAllUpgrade(0, currency, 10000);
    theory.createAutoBuyerUpgrade(1, currency, 1e10);

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
    achievement2 = theory.createAchievement(1, "I Never ends", "layer 10 billion", () => currency.value > 1e10);
    achievement3 = theory.createAchievement(2, "Endgame on Classic", "layer 1 octillion and finsh mulitipler layer.", () => currency.value > 1e27);

    ///////////////////
    //// Story chapters

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