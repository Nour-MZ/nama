<?xml version="1.0" encoding="utf-8"?><!--SPG:

This HTML file has been associated with a SharePoint Master Page (.master file) carrying the same name.  While the files remain associated, you will not be allowed to edit the .master file, and any rename, move, or deletion operations will be reciprocated.

To build the master page directly from this HTML file, simply edit the page as you normally would.  Use the Snippet Generator at http://srv-sp19:90/_layouts/15/ComponentHome.aspx?Url=http%3A%2F%2Fsrv%2Dsp19%3A90%2F%5Fcatalogs%2Fmasterpage%2Fseattle%2Emaster to create and customize useful SharePoint entities, then copy and paste them as HTML snippets into your HTML code.   All updates to this file will automatically sync to the associated Master Page.

-->
<!-- _lcid="1033" _version="16.0.10337" _dal="1" -->
<!-- _LocalBinding -->
<!--SPM:<%@Master language="C#"%>-->
<!--SPM:<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>-->
<!--SPM:<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>-->
<!--SPM:<%@ Import Namespace="Microsoft.SharePoint" %>-->
<!--SPM:<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>-->
<!--SPM:<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>-->
<!--SPM:<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>-->
<!--SPM:<%@ Register TagPrefix="wssuc" TagName="Welcome" src="~/_controltemplates/15/Welcome.ascx" %>-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"[]>
<html xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">
    <!--SID:00 -->
    <head runat="server">
        <meta http-equiv="X-UA-Compatible" content="IE=10" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="http://srv-sp19:90/_catalogs/masterpage/Project/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="http://srv-sp19:90/_catalogs/masterpage/Project/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://srv-sp19:90/_catalogs/masterpage/Project/css/mainstyles.css" />
        <link rel="stylesheet" href="http://srv-sp19:90/_catalogs/masterpage/Project/css/style.css" />
        <meta name="GENERATOR" content="Microsoft SharePoint" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <!--SPM:<SharePoint:IECompatibleMetaTag runat="server"/>-->
        <meta http-equiv="Expires" content="0" />
        <!--SPM:<SharePoint:SPPinnedSiteTile runat="server" TileUrl="/_layouts/15/images/SharePointMetroAppTile.png" TileColor="#0072C6"/>-->
        <!--SPM:<SharePoint:RobotsMetaTag runat="server"/>-->
        <!--SPM:<SharePoint:PageTitle runat="server">-->
        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderPageTitle" runat="server"/>-->
        <!--SPM:</SharePoint:PageTitle>-->
        <!--SPM:<SharePoint:StartScript runat="server"/>-->
        <!--SPM:<SharePoint:CssLink runat="server" Version="15"/>-->
        <!--PS: Start of READ-ONLY PREVIEW (do not modify) --><link href="http://srv-sp19:90/_layouts/15/1033/styles/corev15.css" type="text/css" rel="stylesheet" /><link href="http://srv-sp19:90/_layouts/15/1033/styles/searchv15.css" type="text/css" rel="stylesheet" /><!--PE: End of READ-ONLY PREVIEW -->
        <!--SPM:<SharePoint:ScriptLink language="javascript" name="core.js" OnDemand="true" runat="server" Localizable="false"/>-->
        <!--SPM:<SharePoint:ScriptLink language="javascript" name="menu.js" OnDemand="true" runat="server" Localizable="false"/>-->
        <!--SPM:<SharePoint:ScriptLink language="javascript" name="callout.js" OnDemand="true" runat="server" Localizable="false"/>-->
        <!--SPM:<SharePoint:ScriptLink language="javascript" name="sharing.js" OnDemand="true" runat="server" Localizable="false"/>-->
        <!--SPM:<SharePoint:ScriptLink language="javascript" name="suitelinks.js" OnDemand="true" runat="server" Localizable="false"/>-->
        <!--SPM:<SharePoint:CustomJSUrl runat="server"/>-->
        <!--SPM:<SharePoint:SoapDiscoveryLink runat="server"/>-->
        <!--SPM:<SharePoint:AjaxDelta id="DeltaPlaceHolderAdditionalPageHead" Container="false" runat="server">-->
        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderAdditionalPageHead" runat="server"/>-->
        <!--SPM:<SharePoint:DelegateControl runat="server" ControlId="AdditionalPageHead" AllowMultipleControls="true"/>-->
        <!--SPM:</SharePoint:AjaxDelta>-->
        <!--SPM:<SharePoint:SPShortcutIcon runat="server" IconUrl="/_layouts/15/images/favicon.ico?rev=43"/>-->
<![CDATA[ [if IE 9] ]]>        <style type="text/css">//<![CDATA[
    .ms-core-animation-transparent
    {
        opacity:0;
    }
    .ms-isBot .ms-core-animation-transparent
    {
        opacity:1;
    }
    
        //]]>
        </style>
<![CDATA[ [endif] ]]>        <!--[if lte IE 8]>
    <style type="text/css">//<![CDATA[
    .ms-core-animation-transparent,
    .ms-core-animation-transparent img
    {
       -ms-filter:"alpha(opacity=0)";
    }
    .ms-isBot .ms-core-animation-transparent,
    .ms-isBot .ms-core-animation-transparent img
    {
       -ms-filter:"";
    }
    //]]></style>
    <![endif]-->
        <script type="text/javascript">//<![CDATA[
        var g_pageLoadAnimationParams = { elementSlideIn : "sideNavBox", elementSlideInPhase2 : "contentBox" };
    
        //]]>
        </script>
        <!--SPM:<SharePoint:CssRegistration Name="Themable/corev15.css" runat="server"/>-->
        <!--[if gte mso 9]><xml>
<mso:CustomDocumentProperties>
<mso:ContentType msdt:dt="string">Html Master Page</mso:ContentType>

<mso:HtmlDesignAssociated msdt:dt="string">1</mso:HtmlDesignAssociated>
<mso:HtmlDesignFromMaster msdt:dt="string"></mso:HtmlDesignFromMaster>
<mso:HtmlDesignConversionSucceeded msdt:dt="string">True</mso:HtmlDesignConversionSucceeded>
<mso:HtmlDesignStatusAndPreview msdt:dt="string">http://srv-sp19:90/_catalogs/masterpage/seattle.html, Conversion successful.</mso:HtmlDesignStatusAndPreview>
</mso:CustomDocumentProperties>
</xml><![endif]-->
    </head>
    <body>
        <!--SPM:<SharePoint:ImageLink runat="server"/>-->
        <!--SPM:<SharePoint:SPNoScript runat="server"/>-->
        <!--SPM:<SharePoint:SPClientIDGenerator runat="server" ServerControlID="DeltaPlaceHolderMain;DeltaPlaceHolderPageTitleInTitleArea;DeltaPlaceHolderUtilityContent"/>-->
        <script type="text/javascript">//<![CDATA[ var submitHook = function () { return false; }; theForm._spOldSubmit = theForm.submit; theForm.submit = function () { if (!submitHook()) { this._spOldSubmit(); } }; 
        //]]>
        </script>
        <!--SPM:<WebPartPages:SPWebPartManager runat="Server"/>-->
        <!--SPM:<asp:ScriptManager id="ScriptManager" runat="server" EnablePageMethods="false" EnablePartialRendering="true" EnableScriptGlobalization="false" EnableScriptLocalization="true"/>-->
        <!--SPM:<SharePoint:AjaxDelta id="DeltaDelegateControls" runat="server">-->
        <!--SPM:<SharePoint:DelegateControl runat="server" ControlId="GlobalNavigation"/>-->
        <!--SPM:<SharePoint:DelegateControl ControlId="GlobalSiteLink3" Scope="Farm" runat="server" Visible="false"/>-->
        <!--SPM:</SharePoint:AjaxDelta>-->
        <div id="TurnOnAccessibility" style="display:none" class="s4-notdlg noindex">
            <a id="linkTurnOnAcc" data-accessibility-nocheck="true" href="#" class="ms-TurnOnAcc" onclick="SetIsAccessibilityFeatureEnabled(true);UpdateAccessibilityUI();document.getElementById('linkTurnOffAcc').focus();return false;">
                <!--SPM:<SharePoint:EncodedLiteral runat="server" text="&#60;%$Resources:wss,master_turnonaccessibility%&#62;" EncodeMethod="HtmlEncode"/>-->
            </a>
        </div>
        <div id="TurnOffAccessibility" style="display:none" class="s4-notdlg noindex">
            <a id="linkTurnOffAcc" data-accessibility-nocheck="true" href="#" class="ms-TurnOffAcc" onclick="SetIsAccessibilityFeatureEnabled(false);UpdateAccessibilityUI();document.getElementById('linkTurnOnAcc').focus();return false;">
                <!--SPM:<SharePoint:EncodedLiteral runat="server" text="&#60;%$Resources:wss,master_turnoffaccessibility%&#62;" EncodeMethod="HtmlEncode"/>-->
            </a>
        </div>
        <div class="s4-notdlg s4-skipribbonshortcut noindex">
            <a href="javascript:;" data-accessibility-nocheck="true" onclick="document.getElementById('startNavigation').focus();" class="ms-SkiptoNavigation" accesskey="&lt;%$Resources:wss,skipribbon_accesskey%&gt;" runat="server">
                <!--SPM:<SharePoint:EncodedLiteral runat="server" text="&#60;%$Resources:wss,skipRibbonCommandsLink%&#62;" EncodeMethod="HtmlEncode"/>-->
            </a>
        </div>
        <div class="s4-notdlg noindex">
            <a href="javascript:;" data-accessibility-nocheck="true" onclick="document.getElementById('mainContent').focus();" class="ms-SkiptoMainContent" accesskey="&lt;%$Resources:wss,maincontent_accesskey%&gt;" runat="server">
                <!--SPM:<SharePoint:EncodedLiteral runat="server" text="&#60;%$Resources:wss,mainContentLink%&#62;" EncodeMethod="HtmlEncode"/>-->
            </a>
        </div>
        <div id="TurnOffAnimation" style="display:none;" class="s4-notdlg noindex">
            <a id="linkTurnOffAnimation" data-accessibility-nocheck="true" href="#" class="ms-accessible ms-acc-button" onclick="ToggleAnimationStatus();return false;">
                <!--SPM:<SharePoint:EncodedLiteral runat="server" text="&#60;%$Resources:wss,master_disableanimation%&#62;" EncodeMethod="HtmlEncode"/>-->
            </a>
        </div>
        <div id="TurnOnAnimation" style="display:none;" class="s4-notdlg noindex">
            <a id="linkTurnOnAnimation" data-accessibility-nocheck="true" href="#" class="ms-accessible ms-acc-button" onclick="ToggleAnimationStatus();return false;">
                <!--SPM:<SharePoint:EncodedLiteral runat="server" text="&#60;%$Resources:wss,master_enableanimation%&#62;" EncodeMethod="HtmlEncode"/>-->
            </a>
        </div>
        <a id="HiddenAnchor" href="javascript:;" style="display:none;">
        </a>
        <div id="ms-hcTest">
        </div>
        <div id="ms-designer-ribbon">
            <!--SID:02 {Ribbon}-->
            <!--PS: Start of READ-ONLY PREVIEW (do not modify) --><div class="DefaultContentBlock" style="background:rgb(0, 114, 198); color:white; width:100%; padding:8px; height:64px; overflow:hidden;">In true previews of your site, the SharePoint ribbon will be here.</div><!--PE: End of READ-ONLY PREVIEW -->
        </div>
        <!--MS:<SharePoint:SPSecurityTrimmedControl runat="server" AuthenticationRestrictions="AnonymousUsersOnly">-->
            <!--SPM:<wssucw:Welcome runat="server" EnableViewState="false"/>-->
        <!--ME:</SharePoint:SPSecurityTrimmedControl>-->
        <div id="s4-workspace" class="ms-core-overlay">
        <div class="header-container-overlay"></div>
            <div id="s4-bodyContainer">
                
                <div id="contentRow">
                    <div id="sideNavBox" role="navigation" class="ms-dialogHidden ms-forceWrap ms-noList">
                        <!--SPM:<SharePoint:AjaxDelta id="DeltaPlaceHolderLeftNavBar" BlockElement="true" CssClass="ms-core-navigation" role="navigation" runat="server">-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderLeftNavBar" runat="server">-->
                        <!--SPM:<SharePoint:DelegateControl runat="server" ControlId="QuickLaunchTop"/>-->
                        <a id="startNavigation" name="startNavigation" tabIndex="-1">
                        </a>
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderLeftNavBarTop" runat="server"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderQuickLaunchTop" runat="server"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderLeftNavBarDataSource" runat="server"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderCalendarNavigator" runat="server"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderLeftActions" runat="server"/>-->
                        <div class="ms-core-sideNavBox-removeLeftMargin">
                            <!--SPM:<SharePoint:SPNavigationManager
                    id="QuickLaunchNavigationManager"
                    runat="server" 
                    QuickLaunchControlId="V4QuickLaunchMenu"
                    ContainedControl="QuickLaunch"
                    EnableViewState="false"
>-->
                            <!--SPM:<SharePoint:DelegateControl runat="server" 
						ControlId="QuickLaunchDataSource">-->
                            <!--SPM:<Template_Controls>-->
                            <!--SPM:<asp:SiteMapDataSource 
                                SiteMapProvider="SPNavigationProvider" 
                                ShowStartingNode="False"
                                id="QuickLaunchSiteMap" 
                                StartingNodeUrl="sid:1025" 
                                runat="server"
/>-->
                            <!--SPM:</Template_Controls>-->
                            <!--SPM:</SharePoint:DelegateControl>-->
                            <!--SPM:<SharePoint:AspMenu
                        id="V4QuickLaunchMenu"
                        runat="server"
                        EnableViewState="false" 
                        DataSourceId="QuickLaunchSiteMap"
                        UseSimpleRendering="true"
                        Orientation="Vertical"
                        StaticDisplayLevels="3"
                        AdjustForShowStartingNode="true"
                        MaximumDynamicDisplayLevels="0"
                        SkipLinkText=""
/>-->
                            <!--SPM:</SharePoint:SPNavigationManager>-->
                            <!--SPM:<SharePoint:SPNavigationManager
                        id="TreeViewNavigationManagerV4"
                        runat="server" 
                        ContainedControl="TreeView"
                        CssClass="ms-tv-box"
>-->
                            <!--SPM:<SharePoint:SPLinkButton runat="server" NavigateUrl="~site/_layouts/15/viewlsts.aspx" id="idNavLinkSiteHierarchyV4" Text="&#60;%$Resources:wss,treeview_header%&#62;" accesskey="&#60;%$Resources:wss,quiklnch_allcontent_AK%&#62;" 
                        CssClass="ms-tv-header"/>-->
                            <!--SPM:<SharePoint:DelegateControl runat="server" ControlId="TreeViewAndDataSource">-->
                            <!--SPM:<Template_Controls>-->
                            <!--SPM:<SharePoint:SPHierarchyDataSourceControl
                                    runat="server"
                                    id="TreeViewDataSourceV4"
                                    RootContextObject="Web"
                                    IncludeDiscussionFolders="true"
/>-->
                            <!--SPM:<SharePoint:SPRememberScroll runat="server" id="TreeViewRememberScrollV4" onscroll="javascript:_spRecordScrollPositions(this);" 
                                    style="overflow: auto;">-->
                            <!--SPM:<SharePoint:SPTreeView
                                    id="WebTreeViewV4"
                                    runat="server"
                                    ShowLines="false"
                                    DataSourceId="TreeViewDataSourceV4"
                                    ExpandDepth="0"
                                    SelectedNodeStyle-CssClass="ms-tv-selected"
                                    NodeStyle-CssClass="ms-tv-item"
                                    SkipLinkText=""
                                    NodeIndent="12"
                                    ExpandImageUrl="/_layouts/15/images/tvclosed.png?rev=43"
                                    ExpandImageUrlRtl="/_layouts/15/images/tvclosedrtl.png?rev=43"
                                    CollapseImageUrl="/_layouts/15/images/tvopen.png?rev=43"
                                    CollapseImageUrlRtl="/_layouts/15/images/tvopenrtl.png?rev=43"
                                    NoExpandImageUrl="/_layouts/15/images/tvblank.gif?rev=43" 
>-->
                            <!--SPM:</SharePoint:SPTreeView>-->
                            <!--SPM:</SharePoint:SPRememberScroll>-->
                            <!--SPM:</Template_Controls>-->
                            <!--SPM:</SharePoint:DelegateControl>-->
                            <!--SPM:</SharePoint:SPNavigationManager>-->
                            <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderQuickLaunchBottom" runat="server">-->
                            <div class="ms-core-listMenu-verticalBox">
                                <!--SPM:<SharePoint:ClusteredSPLinkButton
                                runat="server"
								id="idNavLinkViewAll"
                                PermissionsString="ViewFormPages"
                                NavigateUrl="~site/_layouts/15/viewlsts.aspx"
                                Text="&#60;%$Resources:wss,AllSiteContentMore%&#62;"
                                ToolTip="&#60;%$Resources:wss,AllSiteContentMore%&#62;"
                                accesskey="&#60;%$Resources:wss,quiklnch_allcontent_AK%&#62;"
                                CssClass="ms-core-listMenu-item ms-core-listMenu-heading"/>-->
                                <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><a id="ctl00_idNavLinkViewAll" accesskey="3" class="ms-core-listMenu-item ms-core-listMenu-heading" href="#"><span class="ms-splinkbutton-text">All Site Content</span></a><!--PE: End of READ-ONLY PREVIEW-->
                            </div>
                            <!--SPM:</asp:ContentPlaceHolder>-->
                        </div>
                        <!--SPM:<SharePoint:DelegateControl runat="server" ControlId="QuickLaunchBottom"/>-->
                        <!--SPM:</asp:ContentPlaceHolder>-->
                        <!--SPM:</SharePoint:AjaxDelta>-->
                    </div>
                    <div id="contentBox" aria-live="polite" aria-relevant="all" role="main">
                        <a id="mainContent" name="mainContent" tabindex="-1">
                        </a>
                        <div id="notificationArea" class="ms-notif-box">
                        </div>
                        <!--SPM:<SharePoint:AjaxDelta id="DeltaPageStatusBar" BlockElement="true" runat="server">-->
                        <div id="pageStatusBar">
                        </div>
                        <!--SPM:</SharePoint:AjaxDelta>-->
                        <!--SPM:<SharePoint:AjaxDelta id="DeltaPlaceHolderMain" BlockElement="true" IsMainContent="true" runat="server">-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderMain" runat="server">-->
                        <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black;">
            This area will be filled in by content you create in your page layouts.
		
                        
                        </div>
                        <!--SPM:</asp:ContentPlaceHolder>-->
                        <!--SPM:</SharePoint:AjaxDelta>-->
                    </div>
                    <!--SPM:<SharePoint:AjaxDelta id="DeltaFormDigest" BlockElement="true" runat="server">-->
                    <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderFormDigest" runat="server">-->
                    <!--SPM:<SharePoint:FormDigest runat="server"/>-->
                    <!--SPM:</asp:ContentPlaceHolder>-->
                    <!--SPM:</SharePoint:AjaxDelta>-->
                    <div class="ms-hide">
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderSiteName" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderHorizontalNav" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderPageImage" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderTitleLeftBorder" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderMiniConsole" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderTitleRightMargin" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderTitleAreaSeparator" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderNavSpacer" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderLeftNavBarBorder" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderBodyLeftBorder" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderBodyRightMargin" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderBodyAreaClass" runat="server" Visible="true"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderTitleAreaClass" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderGlobalNavigation" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="PlaceHolderGlobalNavigationSiteMap" runat="server" Visible="false"/>-->
                        <!--SPM:<asp:ContentPlaceHolder id="WSSDesignConsole" runat="server" Visible="false"/>-->
                    </div>
                    <footer class="footer-container">
				        <div class="footer-items-container econtainer">
				            <div class="footer-mobile-logo-container">
				                <img src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/ng-ds-logo.svg" alt="">
				            </div>
				            <div class="footer-links-container footer-social-links-container">
				                <div class="footer-logo-container">
				                    <img src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/ng-ds-logo.svg" alt="">
				                </div>
				                <div class="footer-social-media-container">
				                    <a href="" aria-label="check our twitter page" role="link" class="social-media-icon fb"><img
				                            src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/facebook-svgrepo-com.svg" alt=""></a>
				                    <a href="" aria-label="check our linkedin page" role="link" class="social-media-icon linkedin"><img
				                            src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/x-social-media-black-icon.svg" alt=""></a>
				                    <a href="" aria-label="check our snapchat page" role="link" class="social-media-icon snapchat"><img
				                            src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/instagram-svgrepo-com.svg" alt=""></a>
				                    <a href="" aria-label="check our instagram page" role="link"
				                        class="social-media-icon instagram"><img src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/7935ec95c421cee6d86eb22ecd1368a9.svg"
				                            alt=""></a>
				                    <a href="" aria-label="check our facebook page" role="link" class="social-media-icon facebook"><img
				                            src="http://srv-sp19:90/_catalogs/masterpage/Project/assets/7935ec95c421cee6d86eb22ecd125aef.svg" alt=""></a>
				                </div>
				            </div>
				            <div class="footer-links-container">
				                <div class="footer-link-container-title collapsed" data-bs-toggle="collapse"
				                    data-bs-target="#collapseOne">About us</div>
				                <div id="collapseOne" class="footer-overflow-container accordion-collapse collapse "
				                    style="padding:  0;">
				                    <ul class="footer-links">
				                        <li><a href="" class="footer-link">Our Story</a></li>
				                        <li><a href="" class="footer-link">Board Members</a></li>
				                        <li><a href="" class="footer-link">Leadership Team</a></li>
				                        <li><a href="" class="footer-link">Capability Report</a></li>
				                    </ul>
				                </div>
				            </div>
				
				            <div class="footer-links-container">
				                <div class="footer-link-container-title  collapsed" data-bs-toggle="collapse"
				                    data-bs-target="#collapsetwo">Services</div>
				                <div id="collapsetwo" class="footer-overflow-container accordion-collapse collapse ">
				
				                    <ul class="footer-links">
				                        <li><a href="" class="footer-link">Water Services</a></li>
				                        <li><a href="" class="footer-link">Electricity Services</a></li>
				                        <li><a href="" class="footer-link">Wastewater Services</a></li>
				                    </ul>
				                </div>
				            </div>
				
				            <div class="footer-links-container">
				                <div class="footer-link-container-title collapsed " data-bs-toggle="collapse"
				                    data-bs-target="#collapsethree">Quick Links</div>
				                <div id="collapsethree" class="footer-overflow-container accordion-collapse collapse ">
				                    <ul class="footer-links">
				                        <li><a href="" class="footer-link">Thabit</a></li>
				                        <li><a href="" class="footer-link">Whistleblower</a></li>
				                        <li><a href="" class="footer-link">CRT</a></li>
				
				                        <li><a href="" class="footer-link">Capability Report</a></li>
				                    </ul>
				                </div>
				            </div>
				
				            <div class="footer-links-container">
				                <div class="footer-link-container-title collapsed " data-bs-toggle="collapse"
				                    data-bs-target="#collapsefour">Other</div>
				                <div id="collapsefour" class="footer-overflow-container accordion-collapse collapse ">
				                    <ul class="footer-links">
				                        <li><a href="" class="footer-link">Tenders</a></li>
				                        <li><a href="" class="footer-link">Vacancies</a></li>
				                        <li><a href="" class="footer-link">Media Center</a></li>
				                    </ul>
				                </div>
				
				            </div>
				
				        </div>
				        <div class="footer-lower-container econtainer">
				            <div class="footer-lower-links-container">
				                <a href="" class="footer-lower-link">Privacy Policy</a>
				                <div class="violet-circle"></div>
				                <a href="" class="footer-lower-link">Terms & Conditions</a>
				                <div class="violet-circle"></div>
				                <a href="" class="footer-lower-link">Sitemap</a>
				            </div>
				
				            <div class="footer-copyrights-container">
				                © 2024 Nama Dhofar. All Rights Reserved
				            </div>
				        </div>
				    </footer>
                </div>
            </div>
        </div>
        <!--SPM:<SharePoint:ScriptBlock runat="server">-->
        <!--SPM:var g_Workspace = "s4-workspace";-->
        <!--SPM:</SharePoint:ScriptBlock>-->

        <script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/jquery-3.7.1.min.js"></script>
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/popper.min.js"></script>
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/bootstrap.min.js"></script>
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/swiper-bundle.min.js"></script>
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/script.js"></script>
		
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/gsap.min.js"></script>
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/ScrollTrigger.min.js"></script>
		<script src="http://srv-sp19:90/_catalogs/masterpage/Project/js/masonry.pkgd.min.js"></script>
		        
        </body>
</html>
