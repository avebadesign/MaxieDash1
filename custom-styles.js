(function () {
  var styles = `
  /* Import Google Fonts */
@import url("//fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

/* Container fluid */
#app div .container-fluid{
 background-color:#000000;
}

/* Flex col */
#app .transition-slowest .flex-col{
 background-color:#000000 !important;
}

/* Location dashboard wrapper */
#location-dashboard .location-dashboard-wrapper{
 background-color:#0f0f0f !important;
}

/* App */
#app{
 font-family:'DM Sans', sans-serif;
 transform:translatex(0px) translatey(0px);
}

/* Division */
.transition-slowest .flex-col .lg\:justify-between{
 background-color:transparent !important;
 border-style:solid;
 border-color:#ffffff;
 border-width:1px;
}

/* Search placeholder */
#globalSearchOpener .justify-start .search-placeholder{
 font-size:10px;
}

/* Quick actions */
#quickActions{
 font-size:14px;
 display:none;
}

/* Launchpad */
#sb_launchpad{
 display:none;
}

/* Navigation */
nav{
 padding-left:10px;
 padding-right:10px;
 padding-top:10px;
}

/* Divider */
.divider{
 display:none !important;
}

/* Nav title */
.nav-title{
 margin-top:2px;
 margin-bottom:2px;
 font-size:13px;
 font-weight:500;
}

/* Dashboard, Conversations, Calendars, Contacts, Opportunities, Payments */
#sb_dashboard,#sb_conversations,#sb_calendars,#sb_contacts,#sb_opportunities,#sb_payments,#sb_email-marketing,#sb_automation,#sb_sites,#sb_memberships,#sb_reputation,#sb_reporting,#sb_app-marketplace{
 margin-top:3px;
}

/* Overflow hidden */
#app div .flex .transition-slowest .flex-col > .overflow-hidden{
 width:220px !important;
}


/* Alert body */
#location-dashboard_banner--wordpress-promo-container{
 display:none;
}

/* Location dashboard wrapper */
#location-dashboard .location-dashboard-wrapper{
 background-color:#000000;
}

/* Division */
.location-dashboard-wrapper .n-config-provider .w-vw{
 background-color:transparent;
}


.grid-stack .grid-stack-item .grid-stack-item-content .hl-card{
 background-color:#000000;
}

/* Card */
.grid-stack .grid-stack-item .grid-stack-item-content .hl-card{
 background-color:#000000;
 background-image:linear-gradient(180deg, #1D1D1D 0%, #000000 100%);
 box-shadow:0px 1px 10px 0px #212121;
 border-style:none;
}


/* Division */
.grid-stack .grid-stack-item .grid-stack-item-content .hl-card-header .hl-text-md-medium{
 color:#ffffff;
 background-color:#4a0982;
 padding-left:15px;
 padding-right:15px;
 padding-top:5px;
 padding-bottom:5px;
 font-weight:500;
 font-size:12px;
 white-space:wrap;
 border-top-left-radius:10px;
 border-top-right-radius:10px;
 border-bottom-left-radius:10px;
 border-bottom-right-radius:10px;
}

/* Division */
.grid-stack .grid-stack-item .grid-stack-item-content .hl-card-header .hl-text-xs-regular{
 color:#ffffff;
 padding-top:5px;
 padding-left:5px;
 font-style:italic;
}

/* Division */
.hl-text-xs-regular{
 color:#fcfcfc !important;
}

/* Cursor pointer */
.cursor-pointer{
 color:#f8d748 !important;
}

/* Th */
.n-data-table-thead .n-data-table-tr .n-data-table-th{
 background-color:#000000;
 color:#ffffff;
}

/* Table Data */
.n-data-table-tbody .n-data-table-tr .n-data-table-td{
 background-color:#000000;
 color:#ffffff;
}

/* Svg */
.location-dashboard-numeric-chart-text{
 color:#ffffff;
 background-color:#f8d748;
}

/* Title */
.title{
 color:#f8d748 !important;
}

/* Navigation */
#navigation-btn{
 background-color:#000000 !important;
}

/* Input */
.n-input{
 background-color:transparent;
}

/* Input */
.n-input__input-el{
 color:#ffffff !important;
}

/* Topmenu nav */
#app div .topmenu-nav{
 background-color:#000000;
}

/* Topmenu navtitle */
.topmenu-navtitle{
 margin-bottom:10px;
 border-top-left-radius:10px;
 border-top-right-radius:10px;
 border-bottom-left-radius:10px;
 border-bottom-right-radius:10px;
 background-image:linear-gradient(to right, #f7971e 0%, #ffd200 100%);
 padding-top:5px;
 padding-bottom:5px !important;
 font-size:12px !important;
 padding-left:15px !important;
 padding-right:15px !important;
}

/* Relative */
#conversations .hl_conversations--wrap > .relative{
 background-clip:border-box;
 transform:translatex(0px) translatey(0px);
 color:rgb(96, 113, 121);
 width:340px;
}

/* Cursor pointer */
#conversation-list > .cursor-pointer{
 margin-top:1px;
 margin-bottom:1px;
 background-color:#ffffff;
 padding-left:0px !important;
 padding-right:0px;
 font-size:10px;
 transform:translatex(0px) translatey(0px);
 list-style-type:circle;
}

/* Paragraph */
#conversation-list .mt-1 p{
 font-weight:500;
}

/* Span Tag */
#conversation-list .mt-1 span{
 color:#000000;
 font-size:9px;
}

/* Paragraph */
#conversation-list div p{
 color:#5b5b5b;
}

/* Inline flex */
.router-link-exact-active div .inline-flex{
 background-color:#f1c40f;
}

/* Conversation list */
#conversation-list{
 height:100% !important;
}

/* Avatar img */
#conversation-list div .avatar_img{
 background-color:#4a0982 !important;
}

/* Font medium */
div div .border-b-2 .flex .font-medium{
 color:#474747 !important;
 font-size:12px;
}

/* Search conversations */
#search_conversations{
 padding-top:2px;
 padding-bottom:2px;
}

/* Cursor pointer */
#quickFilterDropdownOuter .dropdown-toggle .cursor-pointer{
 margin-bottom:43px;
}

/* Relative */
.hl_conversations--wrap > .relative > div > div > div .relative{
 color:rgb(96, 113, 121);
 background-clip:border-box;
}

/* Svg */
.update-styling-for-new-right-panel .font-inter #message-composer .hl-wrapper-container .n-config-provider #message-composer .flex-col .items-center .items-center > div > .justify-center .w-8{
 color:#6d6d6d !important;
}

/* Svg */
.items-center .items-center .flex > div > div > .justify-center .w-8{
 color:#6d6d6d;
}

/* Svg */
.update-styling-for-new-right-panel .font-inter #message-composer .hl-wrapper-container .n-config-provider #message-composer .flex-col .items-center .items-center .flex > div > .justify-center .w-8{
 color:rgb(109, 109, 109) !important;
}

/* Svg */
.items-center .flex .relative div div .justify-center .w-8{
 color:#6d6d6d;
}

/* Icon */
#app div .flex .w-full .hl_wrapper div #conversations .hl_conversations--wrap .relative div #conversation-list .cursor-pointer div .message-list--avatar .icon{
 color:#6d6d6d !important;
}

/* Cursor pointer */
.hl_conversations--wrap div .hl_conversations--message .hl_conversations--message-body .message-body--conversation .update-styling-for-new-right-panel .tab-content .font-inter #message-composer .hl-wrapper-container .n-config-provider #message-composer .flex-col div .flex .cc-bcc-buttons .cursor-pointer{
 color:#a0a0a0 !important;
}

/* Span Tag */
.right-panel .text-xs .new-conversations-right-panel .n-config-provider .overflow-x-hidden .mini-panel-padding #new-crp--contacts .p-\[16px\] .n-collapse-transition .mt-\[14px\] div .justify-between .items-center div .cursor-pointer span{
 color:#6d6d6d !important;
}

/* Accordion column cols */
#conversations .hl_conversations--wrap div .hl_conversations--message .hl_conversations--message-body .right-panel .text-xs .new-conversations-right-panel .n-config-provider .overflow-x-hidden .mini-panel-padding #new-crp--contacts .p-\[16px\] .accordion-column-cols{
 grid-template-columns:92.75fr 5.79fr !important;
}

/* Svg */
#new-crp--contacts .new-crp--contacts--transition .new-crp--contacts--transition{
 color:#6d6d6d;
}

/* Mini panel */
.new-conversations-right-panel .n-config-provider .mini-panel{
 background-color:#f9fafb;
 transform:translatex(0px) translatey(0px);
}

/* Svg */
.mini-panel div .w-6{
 color:#000000;
}

/* Send */
#send-sms{
 background-color:#000000 !important;
}

/* Schedule later */
#schedule-later{
 background-color:#000000 !important;
}

/* Span Tag */
#send-sms .n-button__content span{
 color:#f9f9f9 !important;
}

/* Svg */
#schedule-later .h-5{
 color:#ffffff;
}

/* Heading */
.hl_conversations--message .hl_conversations--message-header h2{
 font-size:18px;
}

/* Wrapper */
#app div .hl_wrapper{
 background-image:linear-gradient(180deg, #1D1D1D 0%, #000000 100%);
 transform:translatex(0px) translatey(0px);
}

/* Link */
.header-ul a{
 color:#ffffff !important;
}

/* Header underline */
#smartlists .customized-header .header-underline{
 color:#ffffff;
}

/* Button */
#app div .flex .w-full .hl_wrapper #smartlists .hl_controls .hl_controls--left > span > .btn-sm{
 background-color:#383737 !important;
}

/* Button */
#app div .flex .w-full .hl_wrapper #smartlists .hl_controls .hl_controls--left .bulk-actions-list span .btn-sm{
 background-color:#2e2c2c !important;
}

/* Button */
.bulk-actions-list span .btn-sm{
 background-image:linear-gradient(180deg, #1D1D1D 10%, #000000 100%);
 color:#ffffff !important;
}

/* Button */
.hl_controls--left > span > .btn-sm{
 background-image:linear-gradient(180deg, #1D1D1D 10%, #000000 100%);
}

/* Icon gray */
.bulk-actions-list span .icon-sms-gray{
 color:#ffffff;
}

/* Icon email gray */
.bulk-actions-list span .icon-email-svg-gray{
 color:#ffffff;
}

/* Icon email gray, Icon gray, Icon */
.icon-email-svg-gray,.bulk-actions-list .icon-sms-gray,.bulk-actions-list span:nth-child(5) .btn-sm .icon,.bulk-actions-list span:nth-child(6) .btn-sm .icon{
 filter: brightness(10);
}

/* Button */
#colViewButton{
 background-color:#ffffff;
 background-image:linear-gradient(180deg, #1D1D1D 0%, #000000 100%);
}

/* Filter option inner */
#colViewButton .filter-option .filter-option-inner{
 color:#ffffff;
}

/* Input */
.form-control-group .search-form input[type=text]{
 background-color:#191919;
}

/* Button */
#hl_smartlists--filter-btn{
 background-image:linear-gradient(180deg, #1D1D1D 0%, #000000 100%);
 color:#ffffff;
}

/* Italic Tag */
#hl_smartlists--filter-btn i{
 color:#f8d748 !important;
}

/* Flex page bar */
#hl_smartlists-main .card-like .flex-page-bar{
 background-color:#4a0982;
 transform:translatex(0px) translatey(0px);
 display:flex;
 flex-direction:row;
}

/* Card */
#hl_smartlists-main .card{
 background-color:#191919;
}

/* Pointer */
.table-sort tbody tr > .pointer{
 color:#ffffff;
}

/* Body Of Table */
.card-body .table-sort tbody{
 color:#f9f9f9;
}

/* Card body */
#hl_smartlists-main .card .card-body{
 color:#ffffff;
}

/* Link */
.table-sort h4 a{
 color:#ffffff !important;
}

/* Table Data */
.table-sort tr td{
 border-style:none !important;
 font-size:14px;
}

/* Table Data */
.hl_smartlists--wrap #hl_smartlists-main .card .card-body .table-sort tbody tr td{
 padding-top:5px !important;
 padding-bottom:5px !important;
}

/* Th */
.table-sort tr th{
 background-color:#4a0982;
 color:#f2f2f2 !important;
 font-size:12px;
}

/* Blue */
.table-sort tr .--blue{
 color:rgba(248,215,72,0.42) !important;
 font-size:10px;
}

/* Smartlists */
#smartlists{
 transform:translatex(0px) translatey(0px);
}

/* Inline block */
.table-sort .d-inline-block .d-inline-block{
 background-color:rgba(248,215,72,0.08);
}

/* Card like */
#hl_smartlists-main .card-like{
 border-top-left-radius:0px;
 border-top-right-radius:0px;
 color:#ffffff;
}

/* Dashboard */
#dashboard{
 background-color:#020202;
 transform:translatex(0px) translatey(0px);
}

/* Card header */
#dashboard .d-flex .card-header{
 background-color:#000000;
 transform:translatex(0px) translatey(0px);
}

/* Card body */
.d-flex > .container-fluid > .hl_dashboard--latest-review-requests > .card-body{
 background-color:#000000;
}

/* Button */
.card-header .d-flex .btn-secondary{
 background-color:#4a0982 !important;
 margin-left:5px;
 margin-right:5px;
 color:#ffffff !important;
 font-size:12px;
}

/* Undefined input */
#undefined-input{
 font-size:12px;
 color:#ffffff !important;
}

/* Capitalize */
.table-sort tr a.capitalize{
 color:rgba(0,0,0,0.96) !important;
}

/* Customers */
#customers{
 background-color:#000000;
}

/* Flex */
#customers .d-flex{
 background-color:#000000 !important;
}

/* Heading */
.overflow-auto .w-full h2{
 color:#f8d748;
}

/* Button */
#pg-appt__btn--appt-add{
 background-color:#f8d748;
 color:#000000;
}

/* Overflow auto */
#app div .overflow-auto{
 background-color:#000000;
}

/* Full */
#app > div > .flex > .w-full{
 background-color:#000000;
}

/* Tracking wider */
.dummy-table tr .tracking-wider{
 background-color:#4a0982;
 color:#f4f4f4;
 font-weight:400;
}

/* Heading */
.hl_controls div h3{
 color:#f8d748;
}

/* Justify between */
#OpportunitiesList .hl-wrapper-container:nth-child(1) .n-config-provider:nth-child(1) .wrapper > .justify-between:nth-child(1){
 background-color:#141313 !important;
 transform:translatex(0px) translatey(0px);
}

/* Base Unknownion label */
#pipelineDropdDown .n-base-selection--selected .n-base-selection-label{
 background-color:#000000;
}

/* Division */
.n-base-selection-label .n-base-selection-input .n-base-selection-input__content{
 color:#ffffff;
}

/* Data Unknown opportunity */
#data-create-opportunity{
 background-color:#4a0982 !important;
}

/* Card content */
.target .\!border-solid .hl-card-content{
 background-color:#212121;
 background-image:linear-gradient(180deg, #1D1D1D 0%, #000000 100%);
}

.target .\!border-solid .overflow-hidden{
 color:#ffffff;
}

/* Card */
.target .card .hl-card{
 background-color:#1e1e1e;
}

/* Link */
.target .card a{
 color:#eaeaea !important;
}

/* Card content */
.sortable-chosen .hl-card .hl-card-content{
 transform:translatex(0px) translatey(0px);
}

/* Overflow hidden */
.target .items-center .overflow-hidden{
 color:#919191 !important;
}

/* Th */
.table tr th{
 background-color:#4a0982;
 color:#ffffff !important;
}

/* Modal */
.n-modal-body-wrapper div .hl-modal{
 background-color:#ffffff;
 transform:translatex(0px) translatey(0px);
}

/* Title */
.hl-modal-heading div .title{
 color:#000000 !important;
}

.hl-modal .cursor-pointer .font-medium{
 color:#000000;
}

/* Create Unknown opportunity */
#CreateUpdateOpportunity{
 background-color:#4a0982 !important;
}
  `;

  var styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
})();
