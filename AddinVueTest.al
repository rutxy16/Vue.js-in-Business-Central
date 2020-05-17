controladdin VueAddin
{
    RequestedHeight = 300;
    MinimumHeight = 300;
    MaximumHeight = 300;
    RequestedWidth = 700;
    MinimumWidth = 700;
    MaximumWidth = 700;
    VerticalStretch = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    HorizontalShrink = true;
    Scripts =
        'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
        'js/addin.js';
    StyleSheets = 'css/style.css';
    StartupScript = 'js/startup.js';
    Images = 'images/app.js';
    event ControlReady()

    procedure HelloWorld()
}

pageextension 50100 CustCardAddinExtension extends "Customer Card"
{
    layout
    {
        addafter(General)
        {
            usercontrol(VueAddin; VueAddin)
            {
                trigger ControlReady()
                begin
                    CurrPage.VueAddin.HelloWorld();
                end;

            }
        }
    }
}