$(document).ready(function () {
	$('select').material_select();
});

$("#ph-form").submit(function (ev) {
	ev.preventDefault();

	var url = $("#url1").val();
	var uriList = [];
	uriList.push(url2list(url));

	url = $("#url2").val();
	if (url) {
		uriList.push(url2list(url));
	}

	var param = $("#track1").val() === "0" ? "Htnpsne.SiteCheck('param', { 'phProtTrack': false });\n" : "";

	var outputText = '<s' + 'cript>\n'
		+ '/* Proxy Hacking Protection (c) 2015 Pocket Systems. | psn.hatenablog.jp/entry/proxy-hacking-protection */\n'
		+ '(function(H,T,N,p,s,n,e){H.Htnpsne=H.Htnpsne||{};Htnpsne[s]=Htnpsne[s]||'
		+ 'function(){(Htnpsne[s].q=Htnpsne[s].q||[]).push(arguments)};n=T.createElement(N);'
		+ "e=T.getElementsByTagName(N)[0];n.async=1;n['src']=p;e.parentNode.insertBefore(n,e)})"
		+ '(window,document,"script","//niyari" + ".github" + ".io/ph-protection/ph-protection" + ".min" + ".js","SiteCheck");\n'
		+ "Htnpsne.SiteCheck('uriList', " + JSON.stringify(uriList) + ');\n'
		+ param
		+ '</s' + 'cript>\n';
	$("#textarea1").val(outputText);
});

function url2list(url) {
	var data = {}, host = url.split('/')[2];
	data.uriScheme = url.split('://')[0];
	data.hostName = punycode.toASCII(host.split(':')[0]).split('.');
	return data;
}
