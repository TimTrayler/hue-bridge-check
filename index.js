function check()
{
    var x = new XMLHttpRequest();

    x.onreadystatechange = function()
    {
        if(x.readyState == x.DONE)
        {
            if(x.status > 199 && x.status < 300)
            {
                var bridges = JSON.parse(x.responseText);
                var out = document.getElementById("output");
                
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
                alert('An error occurred! Please try again!');
            }
        }
    }

    x.open("GET", "https://discovery.meethue.com/");
    x.send();
}