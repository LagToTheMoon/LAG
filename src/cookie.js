class cookie {
  doCookieSetup = (name, value) => {
    var expires = new Date();
    //有效時間保存 2 天 2*24*60*60*1000
    expires.setTime(expires.getTime() + 172800000);
    document.cookie =
      name +
      "=" +
      escape(value) +
      ";expires=" +
      expires.toGMTString() +
      ";path=/";
  };
  getCookie = (cookieName) => {
    var name = cookieName + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  };
}

export default cookie;
