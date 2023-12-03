dayjs.extend(window.dayjs_plugin_advancedFormat);

//var now = new dayjs();
//document.getElementById("nowSpan").textContent = now.format("MMM Do [of] YYYY");
let today = dayjs().format('dddd, MMMM Do');
document.getElementById("nowSpan").textContent = today;