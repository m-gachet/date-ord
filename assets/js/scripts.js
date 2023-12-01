dayjs.extend(window.dayjs_plugin_advancedFormat);

var now = new dayjs();
document.getElementById("nowSpan").textContent = now.format("MMM Do [of] YYYY");
