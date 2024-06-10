function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6W9PjpnuPSg":
        Script1();
        break;
      case "5Y2kyXYakAG":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 750;
const easing = 'ease-out';
const id = '5ZGorpg3XQf';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6aY7SWb3R5m');
const duration = 750;
const easing = 'ease-out';
const id = '6dDriqt6ub1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
