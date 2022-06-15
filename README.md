# mulitipler-layer
## Create Killing Mulitipler of variables
Over aleardy this:
```js
var blah1, blah2;
```
## Create Killing Powerers of Variables
This know?:
```js
var blah3, blah4;
```

## Create a Mods of currency
```js
currency_blah = theory.createCurrency("B", "B");
```

## Create Mods of Upgrades
```js
   // blah
    {
        let getDesc = (level) => "blah=x^{" + level + "}";
        let getInfo = (level) => "blah=" + getBLAH(level).toString(0);
        blah = theory.createUpgrade(getModUpgId, currency_blah, new ExponentialCost(1, Math.log2(2)));
        blah.getDescription = (_) => Utils.getMath(getDesc(blah.level));
        blah.getInfo = (amount) => Utils.getMathTo(getInfo(blah.level), getInfo(blah.level + amount));
    }
```

## Create Killing Mulitipler of Upgrades
```js
   // cnothing
    {
        let getDesc = (level) => "c_?=4^{" + level + "}";
        let getInfo = (level) => "c_?=" + getCNOTHING(level).toString(0);
        cnothing = theory.createUpgrade(getKillingUpgId, currency, new ExponentialCost(1000, Math.log2(2.12)));
        cnothing.getDescription = (_) => Utils.getMath(getDesc(cnothing.level));
        cnothing.getInfo = (amount) => Utils.getMathTo(getInfo(cnothing.level), getInfo(cnothing.level + amount));
    }
```

## Idea
$$ e^x $$
