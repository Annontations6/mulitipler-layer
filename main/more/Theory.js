import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";
import {ui} from "./api/ui/UI";

var id = "Confrim?";
var name = "Mulitipler Layer";
var description = "when do winner this game. \n\n-----Changelog-----\nv1.10:Diffent to exp idle. \nv1.9:fix popup \nv1.8:2 created popup! \nv1.7: \never fixes bugs! \nv1.6: \n1 New Story Chapter. \nv1.5: \nWhen Fix. \nv1.4: \nAdded Functions. \nv1.3: \nAdded 1 achievement. \nv1.2: \nPrivate Function bulid. \nV1.1: \nAdd Mulitipler Killing \nV1.0:\nRelease.";
var authors = "Annontations6";
var version = 1.10;

var currency, currency2;
var c1, c2, c3, c4, confirm0, c5, f1, f2, f3, prestige, prestige2, prestige3, prestige4;
var c1Exp, c2Exp;

var achievement1, achievement2;
var chapter1, chapter2;

var init = () => {
    currency = theory.createCurrency();
    currency2 = theory.createCurrency();
    currency_functions = theory.createCurrency("ƒ", "ƒ");

    currency2.value = 2;
    currency.value = 1;
    currency_functions.value = 0;

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
        let getDesc = (level) => "c_5=4^{" + level + "}";
        let getInfo = (level) => "c_5=" + getCONFRIM(level).toString(0);
        c5 = theory.createUpgrade(5, currency, new ExponentialCost(1e5, Math.log2(1e10)));
        c5.getDescription = (_) => Utils.getMath(getDesc(c5.level));
        c5.getInfo = (amount) => Utils.getMathTo(getInfo(c5.level), getInfo(c5.level + amount));
        c5.maxLevel = 3;
    }
    
    // f1
    {
        let getDesc = (level) => "f_1=1.2^{" + level + "}";
        let getInfo = (level) => "f_1=" + getF1(level).toString(0);
        f1 = theory.createUpgrade(6, currency_functions, new ExponentialCost(100, Math.log2(1.23)));
        f1.getDescription = (_) => Utils.getMath(getDesc(f1.level));
        f1.getInfo = (amount) => Utils.getMathTo(getInfo(f1.level), getInfo(f1.level + amount));
    }

    // f2
    {
        let getDesc = (level) => "f_2 (percentage)=1.03^{" + level + "}";
        let getInfo = (level) => "f_2=" + getF2(level).toString(0);
        f2 = theory.createUpgrade(7, currency_functions, new ExponentialCost(1e4, Math.log2(2.25)));
        f2.getDescription = (_) => Utils.getMath(getDesc(f2.level));
        f2.getInfo = (amount) => Utils.getMathTo(getInfo(f2.level), getInfo(f2.level + amount));
    }

    // fomega
    {
        let getDesc = (level) => "f_\\omega=2^{" + level + "}";
        let getInfo = (level) => "f_\\omega=" + getFOMEGA(level).toString(0);
        fomega = theory.createUpgrade(8, currency_functions, new ExponentialCost(5e9, Math.log2(1e15)));
        fomega.getDescription = (_) => Utils.getMath(getDesc(fomega.level));
        fomega.getInfo = (amount) => Utils.getMathTo(getInfo(fomega.level), getInfo(fomega.level + amount));
    }

    // fomegasq
    {
        let getDesc = (level) => "f_\\omega power2=2^{" + level + "}";
        let getInfo = (level) => "f_\\omega power2=" + getFOMEGASQ(level).toString(0);
        fomegasq = theory.createUpgrade(9, currency_functions, new ExponentialCost(1e22, Math.log2(1e19)));
        fomegasq.getDescription = (_) => Utils.getMath(getDesc(fomegasq.level));
        fomegasq.getInfo = (amount) => Utils.getMathTo(getInfo(fomegasq.level), getInfo(fomegasq.level + amount));
    }

    // fomegacub
    {
        let getDesc = (level) => "f_\\omega power3=2^{" + level + "}";
        let getInfo = (level) => "f_\\omega power3=" + getFOMEGACUB(level).toString(0);
        fomegacub = theory.createUpgrade(10, currency_functions, new ExponentialCost(1e69, Math.log2(1e23)));
        fomegacub.getDescription = (_) => Utils.getMath(getDesc(fomegacub.level));
        fomegacub.getInfo = (amount) => Utils.getMathTo(getInfo(fomegacub.level), getInfo(fomega.level + amount));
    }

    // f3
    {
        let getDesc = (level) => "f_3=5^{" + level + "}";
        let getInfo = (level) => "f_3=" + getF3(level).toString(0);
        f3 = theory.createUpgrade(11, currency_functions, new ExponentialCost(1e70, Math.log2(1e90)));
        f3.getDescription = (_) => Utils.getMath(getDesc(f3.level));
        f3.getInfo = (amount) => Utils.getMathTo(getInfo(f3.level), getInfo(f3.level + amount));
    }

    // c6
    {
        let getDesc = (level) => "c_6=10^{" + level + "}";
        let getInfo = (level) => "c_6=" + getC6(level).toString(0);
        c6 = theory.createUpgrade(12, currency, new ExponentialCost(1e33, Math.log2(1e15)));
        c6.getDescription = (_) => Utils.getMath(getDesc(c6.level));
        c6.getInfo = (amount) => Utils.getMathTo(getInfo(c6.level), getInfo(c6.level + amount));
        c6.maxLevel = 15;
    }

    // c7
    {
        let getDesc = (level) => "c_7=4^{" + level + "}";
        let getInfo = (level) => "c_7=" + getC7(level).toString(0);
        c7 = theory.createUpgrade(13, currency, new ExponentialCost(1e60, Math.log2(1e25)));
        c7.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        c7.getInfo = (amount) => Utils.getMathTo(getInfo(c7.level), getInfo(c7.level + amount));
        c7.maxLevel = 4;
    }

    // f4
    {
        let getDesc = (level) => "f_4=8^{" + level + "}";
        let getInfo = (level) => "f_4=" + getF3(level).toString(0);
        f4 = theory.createUpgrade(14, currency_functions, new ExponentialCost(1e120, Math.log2(1e60)));
        f4.getDescription = (_) => Utils.getMath(getDesc(f4.level));
        f4.getInfo = (amount) => Utils.getMathTo(getInfo(f4.level), getInfo(f4.level + amount));
    }

    // c8
     {
        let getDesc = (level) => "c_8=4^{" + level + "}";
        let getInfo = (level) => "c_8=" + getC8(level).toString(0);
        c8 = theory.createUpgrade(15, currency, new ExponentialCost(1e90, Math.log2(1e45)));
        c8.getDescription = (_) => Utils.getMath(getDesc(c8.level));
        c8.getInfo = (amount) => Utils.getMathTo(getInfo(c8.level), getInfo(c8.level + amount));
        c8.maxLevel = 6;
    }
    
    // prestige
    {
        prestige = theory.createUpgrade(9999, currency, new FreeCost());
        prestige.getDescription = (_) => "Open debug Menu";
        prestige.getInfo = (amount) => "Open debug Menu";
        prestige.boughtOrRefunded = (_) => {
            getDebugPopup.show();
            prestige.level = 0;
        }
    }

    // prestige2
    {
        prestige2 = theory.createUpgrade(10000, currency, new ExponentialCost(1e25, Math.log2(1)));
        prestige2.getDescription = (_) => "Open automation Menu";
        prestige2.getInfo = (amount) => "Open automation Menu";
        prestige2.boughtOrRefunded = (_) => {
            popup.show();
            prestige2.level = 0;
        }
    }

    // prestige3
    {
        prestige3 = theory.createUpgrade(10001, currency, new ExponentialCost(1e35, Math.log2(1)));
        prestige3.getDescription = (_) => "Open power automation Menu";
        prestige3.getInfo = (amount) => "Open power automation Menu";
        prestige3.boughtOrRefunded = (_) => {
            popup2.show();
            prestige3.level = 0;
        }
    }

    // prestige4
    {
        prestige4 = theory.createUpgrade(10002, currency, new ExponentialCost(1, Math.log2(1)));
        prestige4.getDescription = (_) => "Open stat Menu";
        prestige4.getInfo = (amount) => "Open stat Menu";
        prestige4.boughtOrRefunded = (_) => {
            popup3.show();
            prestige4.level = 0;
        }
    }

    // prestige5
    {
        prestige5 = theory.createUpgrade(10003, currency, new ExponentialCost(1, Math.log2(1)));
        prestige5.getDescription = (_) => "Open changelog Menu";
        prestige5.getInfo = (amount) => "Open changelog Menu";
        prestige5.boughtOrRefunded = (_) => {
            popup4.show();
            prestige5.level = 0;
        }
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
    achievement75 = theory.createAchievement(74, "ƒ1 = 1", "reach function 1", () => currency_functions.value > 1);
    achievement76 = theory.createAchievement(75, "ƒ2 = 1,000,000", "reach function 1 million", () => currency_functions.value > 1e6);
    achievement77 = theory.createAchievement(76, "ƒ3 = 1e36", "reach function 1 undecillion", () => currency_functions.value > 1e36);
    achievement78 = theory.createAchievement(77, "ƒ4 = 1e125", "reach function 100 quadragintillion", () => currency_functions.value > 1e125);
    achievement79 = theory.createAchievement(78, "Dunactions", "reach function upgrade 1 level 69", () => f1.level > 68);
    achievement80 = theory.createAchievement(79, "Bonus!", "reach function upgrade 2 level 1", () => f2.level > 0);
    achievement81 = theory.createAchievement(80, "ωw", "Increase value of ƒω", () => fomega.level > 0);
    achievement82 = theory.createAchievement(81, "ㄖmega 丂quared", "Increase value of ƒω^2", () => fomegasq.level > 0);
    achievement83 = theory.createAchievement(82, "[]|\\/|[-(_¬/-\\ (|⅃|3[-|)", "Increase value of ƒω^3", () => fomegacub.level > 0);
    achievement84 = theory.createSecretAchievement(99999, "Pi-Illion", "Reach layer 2659365073.96", "cant be 1000^pi?", () => currency.value > 2659365073.96);
    achievement85 = theory.createSecretAchievement(100000, "Have Did Number Longer functions?", "Reach function 1.72e141", "sorry this number longer that in?", () => currency_functions.value > 1.72e141);
    achievement86 = theory.createSecretAchievement(100001, "Endgame", "reach function 1e183 and finsh to Mulitipler Layer.", "what", () => currency_functions.value > 1e183);

    ///////////////////
    //// Story chapters
    chapter1 = theory.createStoryChapter(0, "Mulit", "aaa \naaaa \naaaaa", () => c1.level > 0);
    chapter2 = theory.createStoryChapter(1, "probems?", "Probems do this file and go \naaaa \naaaaa", () => c2.level > 0);
    chapter3 = theory.createStoryChapter(2, "what hh", "while do: true == true (somehow?) \nbe \nAaaaaa \nthis platform \ngo spect!", () => c2.level > 2);
    chapter3 = theory.createStoryChapter(3, "hundred parsing", "wow \nthis \nwow", () => c2.level > 99);

    updateAvailability();
    
    var getEndPopup = ui.createPopup({
        title: "The End",
        content: ui.createStackLayout({
            children: [
                ui.createFrame({
                    heightRequest: 309,
                    cornerRadius: 0,
                    content: ui.createLabel({text: "\nYou have reached the end of Mulitipler Layer. This theory ends at the 1e183 functions, it however can go higher (if you really want to push it.)\nWe hope you enjoyed playing through this, as much as we did, making and designing this theory!\n\nCheck out the other Custom Theory that came packaged with the new update: \"Omega Layers EZ made with Jeehan2561\" after you have played this, if you haven't already!\n\nPS: If you made it this far, DM Annontations6 about how bad of a language JavaScript is end.",
                        padding: Thickness(12, 2, 12, 2),
                        fontSize: 15
                    })
                }),
                ui.createLabel({
                    text: "You Win!",
                    horizontalTextAlignment: TextAlignment.CENTER,
                    fontAttributes: FontAttributes.BOLD,
                    fontSize: 18,
                    padding: Thickness(0, 18, 0, 18),
                }),
                ui.createButton({text: "Close", onClicked: () => getEndPopup.hide()})
            ]
        })
    });

    var getDebugPopup = ui.createPopup({
        title: "The Debug",
        content: ui.createStackLayout({
            children: [
                ui.createFrame({
                    heightRequest: 309,
                    cornerRadius: 0,
                    content: ui.createLabel({text: "what this?",
                        padding: Thickness(12, 2, 12, 2),
                        fontSize: 15
                    })
                }),
                ui.createLabel({
                    text: "debug news for other days!",
                    horizontalTextAlignment: TextAlignment.CENTER,
                    fontAttributes: FontAttributes.BOLD,
                    fontSize: 18,
                    padding: Thickness(0, 18, 0, 18),
                }),
                ui.createButton({text: "Close", onClicked: () => getDebugPopup.hide()}),
                ui.createButton({text: "Test Button 1"}),
                ui.createButton({text: "Test Button 2"}),
                ui.createButton({text: "Test Button 3"}),
                ui.createButton({text: "Test Button 4"}),
                ui.createButton({text: "Test End Popup", onClicked: () => getEndPopup.show()})
            ]
        })
    });
    
    var popup = ui.createPopup({
        title: "Auto Killing mulitipler",
        content: ui.createStackLayout({
            children: [
                ui.createFrame({
                    heightRequest: 50,
                    cornerRadius: 10,
                    content: ui.createLabel({
                        text: "I show know latex is go formula know :)",
                        horizontalOptions: LayoutOptions.CENTER,
                        verticalOptions: LayoutOptions.CENTER
                    })
                }),
                ui.createImage({source: ImageSource.ACCELERATE}),
                ui.createLabel({text: "Automation"}),
                ui.createLatexLabel({text: "\\(\\sqrt{10^2+1}\\)"}),
                ui.createLatexLabel({text: "\\(f(t) = ee55000\\)"}),
                ui.createSwitch(),
                ui.createButton({text: "Add 5+ for ^1.15", onClicked: () => c1.level += 5}),
                ui.createButton({text: "Add 5+ for ^1.5", onClicked: () => c2.level += 5}),
                ui.createButton({text: "Add 5+ for ^2", onClicked: () => c3.level += 5}),
                ui.createButton({text: "Add 5+ for ^4", onClicked: () => c4.level += 5}),
                ui.createLabel({text: " i show Power Automation i think -_-"}),
                ui.createButton({text: "Close", onClicked: () => popup.hide()}),
            ]
        })
    });
    
    var popup2 = ui.createPopup({
        title: "Power Automation",
        content: ui.createStackLayout({
            children: [
                ui.createFrame({
                    heightRequest: 50,
                    cornerRadius: 10,
                    content: ui.createLabel({
                        text: "i show know this this game know power automation power.",
                        horizontalOptions: LayoutOptions.CENTER,
                        verticalOptions: LayoutOptions.CENTER
                    })
                }),
                ui.createImage({source: ImageSource.ACCELERATE}),
                ui.createLabel({text: "Power automation i sorry fast i know:)"}),
                ui.createButton({text: "Automation of Confrim0", onClicked: () => confirm0.level += 1}),
                ui.createButton({text: "Automation of f1", onClicked: () => f1.level += 2}),
                ui.createButton({text: "Automation of f2", onClicked: () => f2.level += 2}),
                ui.createButton({text: "Close", onClicked: () => popup2.hide()})
            ]
        })
    });

    var popup3 = ui.createPopup({
        title: "Stats Created Theory",
        content: ui.createStackLayout({
            children: [
                ui.createLabel({text: "Enter Id:"}),
                ui.createEntry(),
                ui.createFrame({
                    heightRequest: 50,
                    cornerRadius: 10,
                    content: ui.createLabel({
                        text: "I think so theory know :)",
                        horizontalOptions: LayoutOptions.CENTER,
                        verticalOptions: LayoutOptions.CENTER
                    })
                }),
                ui.createLabel({text: "Created my theory requies $ee50000."}),
                ui.createLabel({text: "Created my theory requies dt = ???"}),
                ui.createLabel({text: "Enter Another Id:"}),
                ui.createEntry(),
                ui.createImage({source: ImageSource.ACCELERATE}),
                ui.createButton({text: "Close", onClicked: () => popup.hide()})
            ]
        })
    });

    var popup4 = ui.createPopup({
        title: "Changelog",
        content: ui.createStackLayout({
            children: [
                ui.createFrame({
                    heightRequest: 50,
                    cornerRadius: 10,
                    content: ui.createLabel({
                        text: "Warning:get breaking the balance.",
                        horizontalOptions: LayoutOptions.CENTER,
                        verticalOptions: LayoutOptions.CENTER
                    })
                }),
                ui.createLabel({text: "v1.11"}),
                ui.createLabel({text: "\u2022 Idler bugs"}),
                ui.createLabel({text: "\u2022 Whoah Added 2 Upgrades."}),
                ui.createLabel({text: "v1.10"}),
                ui.createLabel({text: "\u2022 Get Big Big Bugs."}),
                ui.createLabel({text: "\u2022 Diffent This Exp Idle (when this markdown.)"}),
                ui.createLabel({text: "\u2022 more fix"}),
                ui.createButton({text: "Close", onClicked: () => popup.hide()})
            ]
        })
    });
    
    
    if (currency_functions.value > 1e235) {
        getEndPopup.show();
    }
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
       currency.value += getCONFRIM(confirm0.level) * getC5(c5.level) * getC6(c6.level) * getC7(c7.level) * getC8(c8.level);
    }
    if (currency.value > 1e308) {
        currency_functions.value += getF1(f1.level) * getF2(f2.level) * getFOMEGA(fomega.level) * getFOMEGASQ(fomegasq.level) * getFOMEGACUB(fomegacub.level) * getF3(f3.level) * getF4(f4.level);
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
var getC5 = (level) => BigNumber.from(4).pow(level);
var getF1 = (level) => BigNumber.from(1.2).pow(level);
var getF2 = (level) => (BigNumber.from(1.03).pow(level) * 100) / 100;
var getFOMEGA = (level) => BigNumber.TWO.pow(level);
var getFOMEGASQ = (level) => BigNumber.TWO.pow(level);
var getFOMEGACUB = (level) => BigNumber.TWO.pow(level);
var getF3 = (level) => BigNumber.from(5).pow(level);
var getC6 = (level) => BigNumber.from(10).pow(level);
var getC7 = (level) => BigNumber.from(4).pow(level);
var getF4 = (level) => BigNumber.from(8).pow(level);
var getC8 = (level) => BigNumber.from(4).pow(level);
var getC1Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC2Exponent = (level) => BigNumber.from(1 + 0.05 * level);

init();
