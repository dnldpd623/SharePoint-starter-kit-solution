# Discuss now extension

# Discuss Now List View Command Set

This List View Command Set provides you the ability to add a custom dialog to start a discussion on a specific document within a document library by creating a discussion on the chosen team at Microsoft Team.

The message is added to the team by using Microsoft Graph APIs based on chosen list of items.

The command set extension is designed for group associated team sites.

![Discuss Now](../../assets/images/components/ext-collab-discussnow.png)

This extension requires access to the Microsoft Graph and must target a specific list template types, such as `101` for document libraries.

Details on the v1 version of the extension from https://github.com/SharePoint/sp-starter-kit/blob/master/documentation/components/ext-collab-discussnow.md. Notice that the v1 UI is different as that was creatin a meeting for the discussion. In the v2, we need to ask list of teams which user has access to start the discussion. 

## Used SharePoint Framework Version

![drop](https://img.shields.io/badge/version-1.9.1-green.svg)

* Only supported in SharePoint Online as uses Microsoft Graph APIs.

## Applies to

* [SharePoint Framework](https:/dev.office.com/sharepoint)
* [Office 365 tenant](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)

## Prerequisites

none

## Solution

Solution|Author(s)
--------|---------
folder name | Author details

## Version history

Version|Date|Comments
-------|----|--------
1.0|December 25, 2019|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

* Clone this repository
* Move to correct folder
* Update config.json based on the tenant details which you use for testing
* in the command line run:
  * `npm install`
  * `gulp serve`

<img src="https://telemetry.sharepointpnp.com/sp-starter-kit/source/react-command-discuss-now" />
