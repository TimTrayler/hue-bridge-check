function check()
{
    return new Promise(async (resolve, reject) => {
        const response = await fetch("https://discovery.meethue.com/");
        const out = document.getElementById("output");
            
        if(response.status > 199 && response.status < 300)
        {
            const bridges = await response.json();

            out.innerHTML = "You have " + bridges.length + " bridge " + ((bridges.length > 1 || bridges.length < 1) ? "s" : "") + " in your local network!";

            if(bridges.length > 0)
            {
                out.innerText += "\n\n\nBridges:\n";

                for(var i = 0; i < bridges.length; i++)
                {
                    out.innerText += "\n IP-Adress: \"" + bridges[i]["internalipaddress"] + "\", ID: \"" + bridges[i]["id"] + "\"\n"
                }
            }

        }else {
            out.innerHTML = "<p error>An error occurred! Make sure you have allowed requests to "
                            + "<a href=\"https://discovery.meethue.com/\" target=\"_blank\"><code>discovery.meethue.com</code></a></p>";
        }
    });
}
