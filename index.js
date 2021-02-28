function check()
{
    var x = new XMLHttpRequest();

    x.onreadystatechange = function()
    {
        if(x.readyState == x.DONE)
        {
            var out = document.getElementById("output");
            
            if(x.status > 199 && x.status < 300)
            {
                var bridges = JSON.parse(x.responseText);
                
                out.innerHTML = "You have " + bridges.length + " bridge " + ((bridges.length > 1 || bridges.length < 1) ? "s" : "") + " in your Wi-Fi!";

                if(bridges.length > 0)
                {
                    out.innerText += "\n\n\nBridges:\n";

                    for(var i = 0; i < bridges.length; i++)
                    {
                        out.innerText += "\n IP-Adress: \"" + bridges[i]["internalipaddress"] + "\", ID: \"" + bridges[i]["id"] + "\"\n"
                    }
                }

            }else {
                out.innerHTML = "An error occurred! Make sure you have allowed Requests to discovery.meethue.com!";
            }
        }
    }

    x.open("GET", "https://discovery.meethue.com/");
    x.send();
}
