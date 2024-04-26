<!DOCTYPE html>
<!-- saved from url=(0055)https://github.com/alura-cursos/js-projeto/tree/aula-10 -->
<html lang="pt" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-turbo-loaded="" class="translated-ltr"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style>
    
  <link rel="dns-prefetch" href="https://github.githubassets.com/">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com/" crossorigin="">
  <link rel="preconnect" href="https://avatars.githubusercontent.com/">

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/light-f13f84a2af0d.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/dark-1ee85695b584.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-8c42799cfb52.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-dc99d916bf90.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-0a83868d0e43.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-3c798f5a8bef.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-4c72a7f3b765.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-222bf22536c7.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-c1d9496197fa.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/primer-primitives-0b5bee5c70e9.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/primer-241a089e9a0a.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/global-1c8bb26336c1.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/github-07f750db5d7c.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/repository-fa69f138fe8d.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./principal_files/code-111be5e4092d.css">

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["code_vulnerability_scanning","copilot_conversational_ux_history_refs","copilot_smell_icebreaker_ux","copilot_implicit_context","failbot_handle_non_errors","geojson_azure_maps","image_metric_tracking","marketing_forms_api_integration_contact_request","marketing_pages_search_explore_provider","turbo_experiment_risky","sample_network_conn_type","no_character_key_shortcuts_in_inputs","react_start_transition_for_navigations","custom_inp","remove_child_patch"]}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/wp-runtime-ca86e92c69f8.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_dompurify_dist_purify_js-6890e890956f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover_js-7bd350d761f4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_smoothscroll-polyfill_dist_smoothscroll_js-node_modules_stacktrace-parse-a448e4-bb5415637fe0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/environment-775215f6b8df.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-9f960d9b217c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js-086f7a27bac0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_relative-time-element_dist_index_js-c76945c5961a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_markdown-toolbar-e-820fc0-bc8f02b96749.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_auto-complete-element_dist_index_js-03fc21f4e80c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_text-expander-element_dist_index_js-8a621df59e80.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_stacktrace-parser_dist_stack-443cd5-1ba4dbac454f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b7d8f4-7dc906febe69.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-27181b-3509ed8075c4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316-745e8b6794ab.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/github-elements-34cbf079a4f4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/element-registry-1f97eb8d96c9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-4da1df-9de8d527f925.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-fd5530-6f4d94175afe.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_lit-html_lit-html_js-5b376145beff.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_morphdom_dist_morphdom-esm_js-node_modules_github_memoize_dist_esm_index_js-05801f7ca718.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-c91f4ad18b62.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-a8ec7ed862cf.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_scroll-anchoring_dist_scroll-anchoring_esm_js-node_modules_github_detail-c9d0ba-387cde917623.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_color-convert_index_js-72c9fbde5ad4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_jtml_lib_index_js-95b84ee6bc34.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-84957b-7b4e472db160.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/ui_packages_sudo_sudo_ts-235370c302ce.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts-82813f-05346aa543fe.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec-355eb4940fad.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_sticky-scroll-into-view_ts-1390d8d5a0dc.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754-782c9388f902.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-9285faa0e011.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/behaviors-7f67a24be639.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-06ff531-2ea61fcc9a71.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/notifications-global-6d6db5144cc3.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js-878844713bc9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-e53a3f-f924cc31bbb1.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_ref-selector_ts-2b432e185ab2.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/codespaces-b7f6071c8422.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_mini-throt-1f9a80-8656545a294a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_remote-form_-737e8d-13881b8e7358.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_behavio-2144fe-a56c35798651.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_github_repositories_get-repo-element_ts-f6b365a47eda.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/repositories-57e1f829b48d.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/code-menu-67595c3a6d0c.js.download"></script>
  

  <title>GitHub - alura-cursos/js-projeto em aula-10</title>



  <meta name="route-pattern" content="/:user_id/:repository/tree/*name(/*path)" data-turbo-transient="">
  <meta name="route-controller" content="files" data-turbo-transient="">
  <meta name="route-action" content="disambiguate" data-turbo-transient="">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="6454:399A4F:1A410B:1BCABD:662C1D04" data-pjax-transient="true"><meta name="html-safe-nonce" content="6a652a769675e854997d979d0a06f98e52c96a549187cf3a082fb98d671b9462" data-pjax-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vY3Vyc29zLmFsdXJhLmNvbS5ici8iLCJyZXF1ZXN0X2lkIjoiNjQ1NDozOTlBNEY6MUE0MTBCOjFCQ0FCRDo2NjJDMUQwNCIsInZpc2l0b3JfaWQiOiI0MzczNTUwMTI4MTkwNzI0MTYxIiwicmVnaW9uX2VkZ2UiOiJicmF6aWxzb3V0aCIsInJlZ2lvbl9yZW5kZXIiOiJicmF6aWxzb3V0aCJ9" data-pjax-transient="true"><meta name="visitor-hmac" content="a43f4da8c4e33c28310fd91c67b6633d8417e025258a5a5a4a331e9a5d0803ba" data-pjax-transient="true">


    <meta name="hovercard-subject-tag" content="repository:687110629" data-turbo-transient="">


  <meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true">
  

  <meta name="selected-link" value="repo_source" data-turbo-transient="">
  <link rel="assets" href="https://github.githubassets.com/">

    <meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I">

<meta name="octolytics-url" content="https://collector.github.com/github/collect">

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/files/disambiguate" data-turbo-transient="true">

  




    <meta name="user-login" content="">

  

    <meta name="viewport" content="width=device-width">

    

      <meta name="description" content="Contribute to alura-cursos/js-projeto development by creating an account on GitHub.">

      <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">

    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/alura-cursos/js-projeto/tree/aula-10">

      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/5bcb5a2afc2d63e2e91edb0bd3b22e9145105af56bb755c5e010b7395c4d99fd/alura-cursos/js-projeto"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="GitHub - alura-cursos/js-projeto at aula-10"><meta name="twitter:description" content="Contribute to alura-cursos/js-projeto development by creating an account on GitHub.">
  <meta property="og:image" content="https://opengraph.githubassets.com/5bcb5a2afc2d63e2e91edb0bd3b22e9145105af56bb755c5e010b7395c4d99fd/alura-cursos/js-projeto"><meta property="og:image:alt" content="Contribute to alura-cursos/js-projeto development by creating an account on GitHub."><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="GitHub - alura-cursos/js-projeto at aula-10"><meta property="og:url" content="https://github.com/alura-cursos/js-projeto"><meta property="og:description" content="Contribute to alura-cursos/js-projeto development by creating an account on GitHub.">
  




      <meta name="hostname" content="github.com">



        <meta name="expected-hostname" content="github.com">


  <meta http-equiv="x-pjax-version" content="94d911e3a3f7b54d3e674d4276089250656130900c20cb61262a24742f2f3530" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="f226bf37af9c33162063db3eb018fed7f088f86d0a20ca54c013fda96c7f2e05" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="ee0944c5331f4d8ee1fbce7e38ff2b19a191e8b4c3e8581466ca68c7efadf21a" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="04458df359dbafc1d9f4bf99a2dada4a0663853d35009ac6ab337d199bceb7e2" data-turbo-track="reload">

  <meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">

      <meta data-hydrostats="publish">
  <meta name="go-import" content="github.com/alura-cursos/js-projeto git https://github.com/alura-cursos/js-projeto.git">

  <meta name="octolytics-dimension-user_id" content="4975968"><meta name="octolytics-dimension-user_login" content="alura-cursos"><meta name="octolytics-dimension-repository_id" content="687110629"><meta name="octolytics-dimension-repository_nwo" content="alura-cursos/js-projeto"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="true"><meta name="octolytics-dimension-repository_parent_id" content="674633686"><meta name="octolytics-dimension-repository_parent_nwo" content="marcelopaludetto/js-objetivos-ano"><meta name="octolytics-dimension-repository_network_root_id" content="674633686"><meta name="octolytics-dimension-repository_network_root_nwo" content="marcelopaludetto/js-objetivos-ano">



      <link rel="canonical" href="https://github.com/alura-cursos/js-projeto/tree/aula-10" data-turbo-transient="">


    <meta name="turbo-body-classes" content="logged-out env-production page-responsive">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark">


  <link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials">

  <style data-styled="active" data-styled-version="5.3.6"></style><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><link type="text/css" rel="stylesheet" charset="UTF-8" href="./principal_files/m=el_main_css"></head>

  <body class="logged-out env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 17px;">
    <div data-turbo-body="" class="logged-out env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative js-header-wrapper ">
      <a href="https://github.com/alura-cursos/js-projeto/tree/aula-10#start-of-content" data-skip-target-assigned="false" class="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ir para o conteúdo</font></font></a>
      
      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      








<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_Button_IconButton_js-node_modules_primer_react_lib--b964b4-f8441db8b94b.js.download"></script>

<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/keyboard-shortcuts-dialog-b4f13290b41c.js.download"></script>

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r0:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>




      

        

            
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-94fd67-9f3636b94e7e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/sessions-ff11af600d3e.js.download"></script>
<header class="Header-old header-logged-out js-details-container Details position-relative f4 py-3" role="banner" data-color-mode="light" data-light-theme="light" data-dark-theme="dark">
  <h2 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">menu de navegação</font></font></h2>

  <button type="button" class="Header-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target" aria-label="Alternar de navegação">
    <span class="d-none"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alternar de navegação</font></font></span>
  </button>

  <div class=" d-flex flex-column flex-lg-row flex-items-center p-responsive height-full position-relative z-1">
    <div class="d-flex flex-justify-between flex-items-center width-full width-lg-auto">
      <a class="mr-lg-3 color-fg-inherit flex-order-2" href="https://github.com/" aria-label="Pagina inicial" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
      </a>

      <div class="flex-1">
        <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Falura-cursos%2Fjs-projeto%2Ftree%2Faula-10" class="d-inline-block d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fbe9c5de10a5860bbb736ab57ade6c4b0660f968923c7866bfe17f0ac2eb7047" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Entrar
        </font></font></a>
      </div>

      <div class="flex-1 flex-order-2 text-right">
        <button aria-label="Alternar de navegação" aria-expanded="false" type="button" data-view-component="true" class="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1">  <span class="Button-content">
    <span class="Button-label"><div class="HeaderMenu-toggle-bar rounded my-1"></div>
            <div class="HeaderMenu-toggle-bar rounded my-1"></div>
            <div class="HeaderMenu-toggle-bar rounded my-1"></div></span>
  </span>
</button>
      </div>
    </div>


    <div class="HeaderMenu--logged-out p-responsive height-fit position-lg-relative d-lg-flex flex-column flex-auto pt-7 pb-4 top-0">
      <div class="header-menu-wrapper d-flex flex-column flex-self-end flex-lg-row flex-justify-between flex-auto p-3 p-lg-0 rounded rounded-lg-0 mt-3 mt-lg-0">
          <nav class="mt-0 px-3 px-lg-0 mb-3 mb-lg-0" aria-label="Global">
            <ul class="d-lg-flex list-style-none">
                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        produtos
        </font></font><svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide">
          <div class="px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
            <ul class="list-style-none f5">
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Actions&quot;,&quot;label&quot;:&quot;ref_cta:Actions;&quot;}" href="https://github.com/features/actions">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-workflow color-fg-subtle mr-3">
    <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ações</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Automatize qualquer fluxo de trabalho
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Packages&quot;,&quot;label&quot;:&quot;ref_cta:Packages;&quot;}" href="https://github.com/features/packages">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-package color-fg-subtle mr-3">
    <path d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pacotes</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Hospedar e gerenciar pacotes
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Security&quot;,&quot;label&quot;:&quot;ref_cta:Security;&quot;}" href="https://github.com/features/security">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-shield-check color-fg-subtle mr-3">
    <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path><path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Segurança</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Encontre e corrija vulnerabilidades
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Codespaces&quot;,&quot;label&quot;:&quot;ref_cta:Codespaces;&quot;}" href="https://github.com/features/codespaces">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-codespaces color-fg-subtle mr-3">
    <path d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z"></path><path d="M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Espaços de código</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Ambientes de desenvolvimento instantâneo
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Copilot&quot;,&quot;label&quot;:&quot;ref_cta:Copilot;&quot;}" href="https://github.com/features/copilot">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-copilot color-fg-subtle mr-3">
    <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path><path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Co-piloto</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Escreva um código melhor com IA
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Code review&quot;,&quot;label&quot;:&quot;ref_cta:Code review;&quot;}" href="https://github.com/features/code-review">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-code-review color-fg-subtle mr-3">
    <path d="M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z"></path><path d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Revisão de código</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Gerenciar alterações de código
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Issues&quot;,&quot;label&quot;:&quot;ref_cta:Issues;&quot;}" href="https://github.com/features/issues">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-issue-opened color-fg-subtle mr-3">
    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Problemas</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Planeje e acompanhe o trabalho
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Discussions&quot;,&quot;label&quot;:&quot;ref_cta:Discussions;&quot;}" href="https://github.com/features/discussions">
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-comment-discussion color-fg-subtle mr-3">
    <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path><path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
</svg>
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Discussões</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Colabore fora do código
      </font></font></div>

    
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
            </ul>
          </div>
          <div class="px-lg-4">
              <span class="d-block h4 color-fg-default my-1" id="product-explore-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Explorar</font></font></span>
            <ul class="list-style-none f5" aria-labelledby="product-explore-heading">
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to All features&quot;,&quot;label&quot;:&quot;ref_cta:All features;&quot;}" href="https://github.com/features"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Todos os recursos

    
</font></font></a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Documentation&quot;,&quot;label&quot;:&quot;ref_cta:Documentation;&quot;}" href="https://docs.github.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Documentação

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to GitHub Skills&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Skills;&quot;}" href="https://skills.github.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Habilidades do GitHub

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
                <!-- BEGIN app/components/site/header_dropdown_item_component.rb --><li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Product&quot;,&quot;action&quot;:&quot;click to go to Blog&quot;,&quot;label&quot;:&quot;ref_cta:Blog;&quot;}" href="https://github.blog/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Blogue

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>
<!-- END app/components/site/header_dropdown_item_component.rb -->
            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Soluções
        </font></font><svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
              <span class="d-block h4 color-fg-default my-1" id="solutions-for-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Para</font></font></span>
            <ul class="list-style-none f5" aria-labelledby="solutions-for-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Enterprise&quot;,&quot;label&quot;:&quot;ref_cta:Enterprise;&quot;}" href="https://github.com/enterprise"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Empreendimento

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Teams&quot;,&quot;label&quot;:&quot;ref_cta:Teams;&quot;}" href="https://github.com/team"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Equipes

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Startups&quot;,&quot;label&quot;:&quot;ref_cta:Startups;&quot;}" href="https://github.com/enterprise/startups"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Iniciantes

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Education&quot;,&quot;label&quot;:&quot;ref_cta:Education;&quot;}" href="https://education.github.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Educação

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
          <div class="border-bottom pb-3 mb-3">
              <span class="d-block h4 color-fg-default my-1" id="solutions-by-solution-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Por solução</font></font></span>
            <ul class="list-style-none f5" aria-labelledby="solutions-by-solution-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to CI/CD &amp;amp; Automation&quot;,&quot;label&quot;:&quot;ref_cta:CI/CD &amp;amp; Automation;&quot;}" href="https://github.com/solutions/ci-cd"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      CI/CD e automação

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to DevOps&quot;,&quot;label&quot;:&quot;ref_cta:DevOps;&quot;}" href="https://github.com/solutions/devops"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      DevOps

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to DevSecOps&quot;,&quot;label&quot;:&quot;ref_cta:DevSecOps;&quot;}" href="https://resources.github.com/devops/fundamentals/devsecops"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      DevSecOps

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="solutions-resources-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Recursos</font></font></span>
            <ul class="list-style-none f5" aria-labelledby="solutions-resources-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Learning Pathways&quot;,&quot;label&quot;:&quot;ref_cta:Learning Pathways;&quot;}" href="https://resources.github.com/learn/pathways"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Caminhos de aprendizagem

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to White papers, Ebooks, Webinars&quot;,&quot;label&quot;:&quot;ref_cta:White papers, Ebooks, Webinars;&quot;}" href="https://resources.github.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Artigos técnicos, e-books, webinars

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Customer Stories&quot;,&quot;label&quot;:&quot;ref_cta:Customer Stories;&quot;}" href="https://github.com/customer-stories"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Histórias de clientes

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" target="_blank" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Solutions&quot;,&quot;action&quot;:&quot;click to go to Partners&quot;,&quot;label&quot;:&quot;ref_cta:Partners;&quot;}" href="https://partner.github.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Parceiros

    </font></font><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle">
    <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
</svg>
</a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
      <button type="button" class="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target" aria-expanded="false"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Código aberto
        </font></font><svg opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down HeaderMenu-icon ml-1">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
      </button>
      <div class="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to GitHub Sponsors&quot;,&quot;label&quot;:&quot;ref_cta:GitHub Sponsors;&quot;}" href="https://github.com/sponsors">
      
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Patrocinadores do GitHub</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Financie desenvolvedores de código aberto
      </font></font></div>

    
</a></li>

            </ul>
          </div>
          <div class="border-bottom pb-3 mb-3">
            <ul class="list-style-none f5">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to The ReadME Project&quot;,&quot;label&quot;:&quot;ref_cta:The ReadME Project;&quot;}" href="https://github.com/readme">
      
      <div>
        <div class="color-fg-default h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O Projeto LeiaME</font></font></div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Artigos da comunidade GitHub
      </font></font></div>

    
</a></li>

            </ul>
          </div>
          <div class="">
              <span class="d-block h4 color-fg-default my-1" id="open-source-repositories-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Repositórios</font></font></span>
            <ul class="list-style-none f5" aria-labelledby="open-source-repositories-heading">
                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Topics&quot;,&quot;label&quot;:&quot;ref_cta:Topics;&quot;}" href="https://github.com/topics"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Tópicos

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Trending&quot;,&quot;label&quot;:&quot;ref_cta:Trending;&quot;}" href="https://github.com/trending"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Tendendo

    
</font></font></a></li>

                <li>
  <a class="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary" data-analytics-event="{&quot;category&quot;:&quot;Header dropdown (logged out), Open Source&quot;,&quot;action&quot;:&quot;click to go to Collections&quot;,&quot;label&quot;:&quot;ref_cta:Collections;&quot;}" href="https://github.com/collections"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Coleções

    
</font></font></a></li>

            </ul>
          </div>
      </div>
</li>


                <li class="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
    <a class="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block" data-analytics-event="{&quot;category&quot;:&quot;Header menu top item (logged out)&quot;,&quot;action&quot;:&quot;click to go to Pricing&quot;,&quot;label&quot;:&quot;ref_cta:Pricing;&quot;}" href="https://github.com/pricing"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Preços</font></font></a>
</li>

            </ul>
          </nav>

        <div class="d-lg-flex flex-items-center mb-3 mb-lg-0 text-center text-lg-left ml-3" style="">
                


<qbsearch-input class="search-input" data-scope="repo:alura-cursos/js-projeto" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="G67SbcWJdxcmI2RKTMTaj7x9AkVXIBvyrUkscD18C6fBj05z9uRErYX6i32Gv1HaEzBDvIcFlz_lP5HKL-tXCQ" data-max-custom-scopes="10" data-header-redesign-enabled="false" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="alura-cursos/js-projeto" data-current-org="alura-cursos" data-current-owner="" data-logged-in="false" data-copilot-chat-enabled="false" data-blackbird-indexed-repo-csrf="&lt;esi:include src=&quot;/_esi/rails_csrf_token_form_hidden?r=XpiRgF6VHd9ElkRjAW3Du%2BRQb3WrZCJN0P9YJ%2BCqnTrfDLunXHccBD%2BnbeXGdjfTIZZ9D6MTp%2FxTodAsJpMfIFnGlkr%2FTTkDhbkaYQQIYbk0Uf2qGLVsbA2AJO6cLyxOvqjoqz%2B1MfsQ7MjgIhjNDRF18q9pyPrH5ao%2BgenS25hOffjLOzvc7KAQ1FR%2B8xrYhehhPgubwb9cCcym9m3R5H6QGqcesUl4Wv8yRA1rjbNZNVrVsNy5cfrDMvlJXf4fzWfAhdLINuGhu98Lomp4ZfVrYhKYQwMiKmXTgMg2pUzLTBe7j8M4W7UNkTKs99XrNiEgTrTZFUlgAFW%2F6%2F8VW8dfOuhuyRPjkO0MWgRbiw1X0PYg1MGfzRH2Ft3IdaQTJiGW%2FdlbHSML1Xp0h3QAyfwSR0YRreoFIcjZueWK98FrlSyaukKc1Zs3FuoQZBGU3cb8xHzT5VVMOjgCskV8RhjVoKzA4Voq8gCCktd%2ByrMLZQCjJuU97zk5rNkGYKfvRkIxWtPKlyyha9ditcvJAdnH%2F2owcSmTf0zVbqndo87juBKOW0k%3D--12w9fltqx8789qbs--Cbzewk45LCjS0C9pF21Zow%3D%3D&quot; /&gt;" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center mr-4 rounded" data-action="click:qbsearch-input#searchInputContainerClicked">
      <button type="button" class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none" data-target="qbsearch-input.inputButton" placeholder="Pesquise ou vá para..." data-hotkey="s,/" autocapitalize="off" data-action="click:qbsearch-input#handleExpand">
        <div class="mr-2 color-fg-muted">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
        </div>
        <span class="flex-1" data-target="qbsearch-input.inputButtonText"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pesquise ou vá para...</font></font></span>
          <div class="d-flex" data-target="qbsearch-input.hotkeyIndicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>

          </div>
      </button>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-large Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pesquise código, repositórios, usuários, problemas, pull requests...</font></font></h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-fixed width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/alura-cursos/js-projeto/tree/aula-10" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Procurar
      </font></font></label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-44bd13ea-485b-4049-b3ca-57efccf1d961" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Claro</font></font></span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Sugestões" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-44bd13ea-485b-4049-b3ca-57efccf1d961" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only"></div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
              Dicas de sintaxe de pesquisa
</font></font></a>            <div class="d-flex flex-1"></div>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Dar uma resposta
      </font></font></h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Fechar" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="xhkH0EOJygfPAu4ghdolwebyobcTec/9fXTLzrcBH0skdW3KS0/pyBufOTPm+GaE7gAI84SCN+5LiDU3usBxkg==">
          <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lemos todos os comentários e levamos sua opinião muito a sério.</font></font></p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Inclua meu endereço de e-mail para que eu possa ser contatado" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inclua meu endereço de e-mail para que eu possa ser contatado</font></font></label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    Cancelar
</font></font></button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    Enviar comentários
</font></font></button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Pesquisas salvas
      </font></font></h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Use pesquisas salvas para filtrar seus resultados mais rapidamente</font></font></h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Fechar" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="yQcBUNzLktAEweq9GBI4qtNaNq0k4I17oAyM/VT5i6oNmi39bKsXjXRUlOrGrH7zASnuGNK0iJmC4+is9PyVRg==">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nome</font></font></label>
            <auto-check src="/search/custom_scopes/check_name" required="">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" data-csrf="true" value="l8QYyY9eLrRzJI9UQdT0WrnGd0d7pZwO0BzOjUluXVahgqNakdbSuz+dlJf+/4B8QHweb5lce3C4uEwmBfe8mw==">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Consulta</font></font></label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OU repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            Para ver todos os qualificadores disponíveis, consulte nossa </font></font><a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">documentação</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> .
          </font></font></p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    Cancelar
</font></font></button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    Criar pesquisa salva
</font></font></button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input><input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="B1oNM/W3tEVzCLdj+qOxpH4J+owqxSUyCI1noQcknLX9cjNOUrOqvTmVsY/DZMppVOt28/mGj0ORmQ1NI21NNA==">


          <div class="position-relative mr-lg-3 d-lg-inline-block">
            <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Falura-cursos%2Fjs-projeto%2Ftree%2Faula-10" class="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fbe9c5de10a5860bbb736ab57ade6c4b0660f968923c7866bfe17f0ac2eb7047" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
              Entrar
            </font></font></a>
          </div>

            <a href="https://github.com/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Ffiles%2Fdisambiguate&amp;source=header-repo&amp;source_repo=alura-cursos%2Fjs-projeto" class="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="fbe9c5de10a5860bbb736ab57ade6c4b0660f968923c7866bfe17f0ac2eb7047" data-analytics-event="{&quot;category&quot;:&quot;Sign up&quot;,&quot;action&quot;:&quot;click to sign up for account&quot;,&quot;label&quot;:&quot;ref_page:/&lt;user-name&gt;/&lt;repo-name&gt;/files/disambiguate;ref_cta:Sign up;ref_loc:header logged out&quot;}"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
              Inscrever-se
            </font></font></a>
        </div>
      </div>
    </div>
  </div>
</header>

      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full mb-3">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Você fez login com outra guia ou janela. </font></font><a class="Link--inTextBlock" href="https://github.com/alura-cursos/js-projeto/tree/aula-10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Recarregue</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> para atualizar sua sessão.</font></font></span>
        <span class="js-stale-session-flash-signed-out" hidden=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Você saiu em outra guia ou janela. </font></font><a class="Link--inTextBlock" href="https://github.com/alura-cursos/js-projeto/tree/aula-10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Recarregue</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> para atualizar sua sessão.</font></font></span>
        <span class="js-stale-session-flash-switched" hidden=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Você trocou de conta em outra guia ou janela. </font></font><a class="Link--inTextBlock" href="https://github.com/alura-cursos/js-projeto/tree/aula-10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Recarregue</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> para atualizar sua sessão.</font></font></span>

    <button id="icon-button-5b698f9a-0733-4f1a-b8db-b96c8d7b839b" aria-labelledby="tooltip-574c05ef-76f2-4ade-9601-bfd5eb575ea9" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-574c05ef-76f2-4ade-9601-bfd5eb575ea9" for="icon-button-5b698f9a-0733-4f1a-b8db-b96c8d7b839b" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ignorar alerta</font></font></tool-tip>


  
</div>
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">





  <template class="js-flash-template"></template>
</div>


    
    <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template></include-fragment>





  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
  





    
    

    






  
  <div id="repository-container-header" class="pt-3 hide-full-screen" style="background-color: var(--page-header-bgColor, var(--color-page-header-bg));" data-turbo-replace="">

      <div class="d-flex flex-wrap flex-justify-end mb-3  px-3 px-md-4 px-lg-5" style="gap: 1rem;">

        <div class="flex-auto min-width-0 width-fit mr-3">
            
  <div class=" d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked color-fg-muted mr-2">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
    
    <span class="author flex-self-stretch" itemprop="author">
      <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/alura-cursos/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/alura-cursos"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        alura-cursos
</font></font></a>    </span>
    <span class="mx-1 flex-self-stretch color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/</font></font></span>
    <strong itemprop="name" class="mr-2 flex-self-stretch">
      <a data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" href="https://github.com/alura-cursos/js-projeto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js-projeto</font></font></a>
    </strong>

    <span></span><span class="Label Label--secondary v-align-middle mr-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Público</font></font></span>
  </div>
    <span class="text-small lh-condensed-ultra no-wrap mt-1" data-repository-hovercards-enabled=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      bifurcado de </font></font><a data-hovercard-type="repository" data-hovercard-url="/marcelopaludetto/js-objetivos-ano/hovercard" class="Link--inTextBlock" href="https://github.com/marcelopaludetto/js-objetivos-ano"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">marcelopaludetto/js-objetivos-ano</font></font></a>
    </span>


        </div>

        <div id="repository-details-container" data-turbo-replace="">
            <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">
    
      

  <li>
            <a href="https://github.com/login?return_to=%2Falura-cursos%2Fjs-projeto" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8f720bb418122618f948cf089fab30d1b0872de1367366a5af00990d4f84531f" aria-label="Você deve estar conectado para alterar as configurações de notificação" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell mr-2">
    <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
</svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Notificações
</font></font></a>
  </li>

  <li>
          <a icon="repo-forked" id="fork-button" href="https://github.com/login?return_to=%2Falura-cursos%2Fjs-projeto" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:687110629,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="19044b014c0f14f6ccff88dc17c0d176cc9fd738cbe9757c62eb6e8a0ced9a10" data-view-component="true" class="btn-sm btn">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Garfo
    </font></font><span id="repo-network-counter" data-pjax-replace="true" data-turbo-replace="true" title="90" data-view-component="true" class="Counter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">90</font></font></span>
</a>
  </li>

  <li>
        <div data-view-component="true" class="BtnGroup d-flex">
        <a href="https://github.com/login?return_to=%2Falura-cursos%2Fjs-projeto" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:687110629,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ba537654ffcc487e1382265019653a3e556f1d345309bc90e61287589b228e1d" aria-label="Você deve estar conectado para marcar um repositório com estrela" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><span data-view-component="true" class="d-inline"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Estrela
</font></font></span>          <span id="repo-stars-counter-star" aria-label="0 usuários marcaram este repositório com estrela" data-singular-suffix="user starred this repository" data-plural-suffix="users starred this repository" data-turbo-replace="true" title="0" data-view-component="true" class="Counter js-social-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span>
</a>        <button aria-label="Você deve estar conectado para adicionar este repositório a uma lista" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
  </li>

    <li>
        

    </li>
</ul>

        </div>
      </div>

        <div id="responsive-meta-container" data-turbo-replace="">
      <div class="d-block d-md-none mb-2 px-3 px-md-4 px-lg-5">
      <div class="mb-2 d-flex flex-items-center Link--secondary">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link flex-shrink-0 mr-2">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
</svg>
        <span class="flex-auto min-width-0 css-truncate css-truncate-target width-fit">
          <a title="https://marcelopaludetto.github.io/js-projeto/" role="link" target="_blank" class="text-bold" rel="noopener noreferrer" href="https://marcelopaludetto.github.io/js-projeto/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">marcelopaludetto.github.io/js-projeto/</font></font></a>
        </span>
      </div>

    
      <h3 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Licença</font></font></h3>
  <div class="mb-2">
    <a href="https://github.com/alura-cursos/js-projeto/blob/main/LICENSE" class="Link--muted" data-analytics-event="{&quot;category&quot;:&quot;Repository Overview&quot;,&quot;action&quot;:&quot;click&quot;,&quot;label&quot;:&quot;location:sidebar;file:license&quot;}">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-law mr-2">
    <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
</svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     Licença MIT
    </font></font></a>
  </div>


    <div class="mb-3">
        <a class="Link--secondary no-underline mr-3" href="https://github.com/alura-cursos/js-projeto/stargazers">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-1">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
          <span class="text-bold"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
          estrelas
 </font></font></a>        <font style="vertical-align: inherit;"><a class="Link--secondary no-underline mr-3" href="https://github.com/alura-cursos/js-projeto/forks"><span class="text-bold"><font style="vertical-align: inherit;">139</font></span></a><a class="Link--secondary no-underline mr-3" href="https://github.com/alura-cursos/js-projeto/forks"><font style="vertical-align: inherit;"> 
          garfos
</font></a></font><a class="Link--secondary no-underline mr-3" href="https://github.com/alura-cursos/js-projeto/forks">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-1">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
          <span class="text-bold"><font style="vertical-align: inherit;"></font></span><font style="vertical-align: inherit;"></font></a>          <a class="Link--secondary no-underline mr-3 d-inline-block" href="https://github.com/alura-cursos/js-projeto/branches">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-branch mr-1">
    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
</svg>
            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Galhos</font></font></span>
</a>          <a class="Link--secondary no-underline d-inline-block" href="https://github.com/alura-cursos/js-projeto/tags">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-tag mr-1">
    <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
</svg>
            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tag</font></font></span>
</a>        <a class="Link--secondary no-underline d-inline-block" href="https://github.com/alura-cursos/js-projeto/activity">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pulse mr-1">
    <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
</svg>
          <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Atividade</font></font></span>
</a>    </div>

      <div class="d-flex flex-wrap gap-2">
        <div class="flex-1">
            <div data-view-component="true" class="BtnGroup d-flex">
        <a href="https://github.com/login?return_to=%2Falura-cursos%2Fjs-projeto" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:687110629,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="ba537654ffcc487e1382265019653a3e556f1d345309bc90e61287589b228e1d" aria-label="Você deve estar conectado para marcar um repositório com estrela" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn btn-block BtnGroup-item">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star v-align-text-bottom d-inline-block mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg><span data-view-component="true" class="d-inline"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Estrela
</font></font></span>
</a>        <button aria-label="Você deve estar conectado para adicionar este repositório a uma lista" type="button" disabled="disabled" data-view-component="true" class="btn-sm btn BtnGroup-item px-2">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button></div>
        </div>
        <div class="flex-1">
                <a href="https://github.com/login?return_to=%2Falura-cursos%2Fjs-projeto" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/alura-cursos/js-projeto/tree/aula-10&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="8f720bb418122618f948cf089fab30d1b0872de1367366a5af00990d4f84531f" aria-label="Você deve estar conectado para alterar as configurações de notificação" data-view-component="true" class="tooltipped tooltipped-s btn-sm btn btn-block">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bell mr-2">
    <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
</svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Notificações
</font></font></a>
        </div>
          <span>
            

          </span>
      </div>
  </div>

</div>


          <nav data-pjax="#js-repo-pjax-container" aria-label="Repositório" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/alura-cursos/js-projeto/tree/aula-10" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /alura-cursos/js-projeto/tree/aula-10" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" aria-current="page" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Código</font></font></span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Não disponível" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/alura-cursos/js-projeto/pulls" data-tab-item="i1pull-requests-tab" data-selected-links="repo_pulls checks /alura-cursos/js-projeto/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Solicitações pull</font></font></span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="4" data-view-component="true" class="Counter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4</font></font></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/alura-cursos/js-projeto/actions" data-tab-item="i2actions-tab" data-selected-links="repo_actions /alura-cursos/js-projeto/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ações</font></font></span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Não disponível" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/alura-cursos/js-projeto/projects" data-tab-item="i3projects-tab" data-selected-links="repo_projects new_repo_project repo_project /alura-cursos/js-projeto/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Projetos</font></font></span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/alura-cursos/js-projeto/security" data-tab-item="i4security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /alura-cursos/js-projeto/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Segurança</font></font></span>
          

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/alura-cursos/js-projeto/pulse" data-tab-item="i5insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /alura-cursos/js-projeto/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Percepções</font></font></span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Não disponível" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-button" popovertarget="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-overlay" aria-controls="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-list" aria-haspopup="true" aria-labelledby="tooltip-32cedac3-4e11-48ae-abee-3f8b98d58d59" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-32cedac3-4e11-48ae-abee-3f8b98d58d59" for="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opções adicionais de navegação</font></font></tool-tip>


<anchored-position id="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-overlay" anchor="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-button" id="action-menu-74182ddc-ef20-41bd-a613-c962d39f2e55-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-8f6997de-5f9a-4894-b334-952cb3876158" href="https://github.com/alura-cursos/js-projeto/tree/aula-10" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Código
</font></font></span></a>
  
</li>
        <li hidden="" data-menu-item="i1pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-e6a4a9cd-86d5-4a21-8bec-5b0f7b4a00f4" href="https://github.com/alura-cursos/js-projeto/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Solicitações pull
</font></font></span></a>
  
</li>
        <li hidden="" data-menu-item="i2actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-3c5b69ce-7c4c-4156-b952-89c5650006f8" href="https://github.com/alura-cursos/js-projeto/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Ações
</font></font></span></a>
  
</li>
        <li hidden="" data-menu-item="i3projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-c88882cd-b9d6-4ec3-b47e-94e854359514" href="https://github.com/alura-cursos/js-projeto/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Projetos
</font></font></span></a>
  
</li>
        <li hidden="" data-menu-item="i4security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-a1a6e4e0-503a-4f17-89c9-64c8cc9137c2" href="https://github.com/alura-cursos/js-projeto/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Segurança
</font></font></span></a>
  
</li>
        <li hidden="" data-menu-item="i5insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-c7a87e38-acec-4191-914b-0c71f365d790" href="https://github.com/alura-cursos/js-projeto/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Percepções
</font></font></span></a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>

  </div>

  



<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
    



    
      
  <h1 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">alura-cursos/js-projeto</font></font></h1>
  <div class="clearfix container-xl px-md-4 px-lg-5 px-3">
    <div>

  <div id="spoof-warning" class="mt-0 pb-3" hidden="" aria-hidden="">
  <div data-view-component="true" class="flash flash-warn mt-0 clearfix">
  
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert float-left mt-1">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>

      <div class="overflow-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Este commit não pertence a nenhuma ramificação deste repositório e pode pertencer a uma bifurcação fora do repositório.</font></font></div>


  
</div></div>

  



  <div style="max-width: 100%" data-view-component="true" class="Layout Layout--flowRow-until-md react-repos-overview-margin Layout--sidebarPosition-end Layout--sidebarPosition-flowRow-end">
  <div data-view-component="true" class="Layout-main">        

<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/react-lib-1fbfc5be2c18.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-541a38-ade861844008.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_Box_Box_js-8f8c5e2a2cbf.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_Button_Button_js-95a7748e3c39.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_TooltipV2_Tooltip_js-5c105bd4b6bc.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_mjs-cb996b1b8e38.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-f41028bf9254.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_AnchoredOverlay_AnchoredOverlay_js-6305545ffa4a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_react-router-dom_dist_index_js-3b41341d50fe.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_UnderlineNav_index_js-0345ef2c2625.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_AvatarStack_AvatarStack_js-node_modules_primer_reac-4288ff-9a651981e3a4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-node_modules_primer_react_-04d00e-902ed5c675c5.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/ui_packages_react-core_create-browser-history_ts-ui_packages_safe-storage_safe-storage_ts-ui_-682c2c-e45e451173ec.js.download"></script>

<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/ui_packages_ref-selector_RefSelector_tsx-b257014a1aab.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/app_assets_modules_react-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_ho-e725dc-c2ba3df232d1.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./principal_files/repos-overview-1dfb38ece6d4.js.download"></script>

<react-partial partial-name="repos-overview" data-ssr="true" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"initialPayload":{"allShortcutsEnabled":false,"path":"/","repo":{"id":687110629,"defaultBranch":"main","name":"js-projeto","ownerLogin":"alura-cursos","currentUserCanPush":false,"isFork":true,"isEmpty":false,"createdAt":"2023-09-04T16:27:50.000Z","ownerAvatar":"https://avatars.githubusercontent.com/u/4975968?v=4","public":true,"private":false,"isOrgOwned":true},"currentUser":null,"refInfo":{"name":"aula-10","listCacheKey":"v0:1693844900.617464","canEdit":false,"refType":"branch","currentOid":"32c1fc50579c61aa0d8cdecdf50d4fb66df0c304"},"tree":{"items":[{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"index.html","path":"index.html","contentType":"file"},{"name":"main.js","path":"main.js","contentType":"file"},{"name":"style.css","path":"style.css","contentType":"file"}],"templateDirectorySuggestionUrl":null,"readme":null,"totalCount":4,"showBranchInfobar":true},"fileTree":null,"fileTreeProcessingTime":null,"foldersToFetch":[],"treeExpanded":false,"symbolsExpanded":false,"isOverview":true,"overview":{"banners":{"shouldRecommendReadme":false,"isPersonalRepo":false,"showUseActionBanner":false,"actionSlug":null,"actionId":null,"showProtectBranchBanner":false,"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_repo","releasePath":"/alura-cursos/js-projeto/releases/new?marketplace=true","showPublishActionBanner":false},"interactionLimitBanner":null,"showInvitationBanner":false,"inviterName":null},"codeButton":{"contactPath":"/contact","isEnterprise":false,"local":{"protocolInfo":{"httpAvailable":true,"sshAvailable":null,"httpUrl":"https://github.com/alura-cursos/js-projeto.git","showCloneWarning":null,"sshUrl":null,"sshCertificatesRequired":null,"sshCertificatesAvailable":null,"ghCliUrl":"gh repo clone alura-cursos/js-projeto","defaultProtocol":"http","newSshKeyUrl":"/settings/ssh/new","setProtocolPath":"/users/set_protocol"},"platformInfo":{"cloneUrl":"https://desktop.github.com","showVisualStudioCloneButton":false,"visualStudioCloneUrl":"https://windows.github.com","showXcodeCloneButton":false,"xcodeCloneUrl":"https://developer.apple.com","zipballUrl":"/alura-cursos/js-projeto/archive/refs/heads/aula-10.zip"}},"newCodespacePath":"/codespaces/new?hide_repo_select=true\u0026ref=aula-10\u0026repo=687110629"},"popovers":{"rename":null,"renamedParentRepo":null},"commitCount":"22","overviewFiles":[{"displayName":"LICENSE","repoName":"js-projeto","refName":"aula-10","path":"LICENSE","preferredFileType":"license","tabName":"License","richText":"\u003cdiv class=\"plain\"\u003e\u003cpre style=\"white-space: pre-wrap\"\u003eMIT License\n\nCopyright (c) 2023 Marcelo Paludetto Rodrigues\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\u003c/pre\u003e\u003c/div\u003e","loaded":true,"timedOut":false,"errorMessage":null,"headerInfo":{"toc":[],"siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Falura-cursos%2Fjs-projeto%2Ftree%2Faula-10"}}],"overviewFilesProcessingTime":19.195964}},"appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-a007d7f370d6.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-d0f0ff069004.js","githubDevUrl":null,"enabled_features":{"code_nav_ui_events":false,"react_blob_overlay":false,"copilot_conversational_ux_embedding_update":false,"copilot_smell_icebreaker_ux":true,"copilot_workspace":false}}}}</script>
  <div data-target="react-partial.reactRoot"> <!-- --> <!-- --> <div class="Box-sc-g0xbh4-0 izjvBm"><div class="Box-sc-g0xbh4-0 rPQgy"><div class="Box-sc-g0xbh4-0 eUMEDg"></div></div><div class="Box-sc-g0xbh4-0 eLcVee"><div class="Box-sc-g0xbh4-0 hsfLlq"><div class="Box-sc-g0xbh4-0 gpKoUz"><button type="button" id="branch-picker-repos-header-ref-selector" aria-haspopup="true" tabindex="0" aria-label="filial aula-10" data-testid="anchor-button" class="types__StyledButton-sc-ws60qy-0 hILMMl overview-ref-selector" data-hotkey="w"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text"><div class="Box-sc-g0xbh4-0 bKgizp"><div class="Box-sc-g0xbh4-0 iPGYsi"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 dKmYfk ref-selector-button-text-container"><span class="Text-sc-17v1xeu-0 bOMzPg">&nbsp;<!-- --><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aula-10</font></font></span></div></div></span><span data-component="trailingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="w"></button></div><div class="Box-sc-g0xbh4-0 laYubZ"><a style="--button-color:fg.muted" type="button" href="https://github.com/alura-cursos/js-projeto/branches" class="types__StyledButton-sc-ws60qy-0 cuOWTR"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></span><span data-component="text"><div class="Box-sc-g0xbh4-0"><strong class="color-fg-default"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">11 </font></font></strong>
<span class="color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">filiais</font></font></span>
</div></span></span></a><a style="--button-color:fg.muted" type="button" href="https://github.com/alura-cursos/js-projeto/tags" class="types__StyledButton-sc-ws60qy-0 cuOWTR"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-tag" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></span><span data-component="text"><div class="Box-sc-g0xbh4-0"><strong class="color-fg-default"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0 </font></font></strong>
<span class="color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tags</font></font></span>
</div></span></span></a></div><div class="Box-sc-g0xbh4-0 swnaL"><a style="--button-color:fg.muted" type="button" aria-label="Acesse a página Filiais" href="https://github.com/alura-cursos/js-projeto/branches" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 tDSzd"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></a><a style="--button-color:fg.muted" type="button" aria-label="Vá para a página de tags" href="https://github.com/alura-cursos/js-projeto/tags" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 tDSzd"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-tag" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg></a></div></div><div class="Box-sc-g0xbh4-0 bWpuBf"><div class="Box-sc-g0xbh4-0 grHjNb"><div class="Box-sc-g0xbh4-0 dXTsqj"><div class="Box-sc-g0xbh4-0 ggfwQp"><span class="TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0 TextInputWrapper-sc-1mqhpbi-1 cXNreu jbzqwE TextInput-wrapper" aria-busy="false"><span class="TextInput-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Ir para o arquivo" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Ir para o arquivo" data-component="input" class="UnstyledTextInput-sc-14ypya-0 cDLBls" value=""><span class="TextInput-icon"></span></span></div></div><div class="Box-sc-g0xbh4-0 dCOrmu"><button type="button" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 pyyxt"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ir para o arquivo</font></font></span></span></button></div><div class="react-directory-add-file-icon"></div><div class="react-directory-remove-file-icon"></div></div><button type="button" id=":R55ab:" aria-haspopup="true" tabindex="0" class="types__StyledButton-sc-ws60qy-0 gYvpXq"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><div class="Box-sc-g0xbh4-0 bVvbgP"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-code" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg></div></span><span data-component="text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Código</font></font></span></span><span data-component="trailingAction" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></button><div class="Box-sc-g0xbh4-0 bNDvfp"><button data-component="IconButton" type="button" aria-label="Abra o menu de mais ações" id=":R75ab:" aria-haspopup="true" tabindex="0" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 pyyxt"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div><div data-testid="branch-info-bar" aria-live="polite" class="Box-sc-g0xbh4-0 vhgA"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Este ramo está atualizado com</font></font><span class="BranchName-sc-sg8jsy-0 qdRPP"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">marcelopaludetto/js-objetivos-ano:aula-10</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font></span><div class="Box-sc-g0xbh4-0 jGfYmh"></div></div><div class="Box-sc-g0xbh4-0 yfPnm"><div data-hpc="true" class="Box-sc-g0xbh4-0"><button hidden="" data-testid="focus-next-element-button" data-hotkey="j"></button><button hidden="" data-testid="focus-previous-element-button" data-hotkey="k"></button><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="folders-and-files"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pastas e arquivos</font></font></h2><table aria-labelledby="folders-and-files" class="Box-sc-g0xbh4-0 cAQuiW"><thead class="Box-sc-g0xbh4-0 iiUlLN"><tr class="Box-sc-g0xbh4-0 jmggSN"><th colspan="2" class="Box-sc-g0xbh4-0 kvYunM"><span class="Text-sc-17v1xeu-0 eUGNHp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nome</font></font></span></th><th colspan="1" class="Box-sc-g0xbh4-0 hrLuxA"><span class="Text-sc-17v1xeu-0 eUGNHp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nome</font></font></span></th><th class="Box-sc-g0xbh4-0 ePjhhA"><div title="Última mensagem de commit" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 eUGNHp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Última mensagem de commit</font></font></span></div></th><th colspan="1" class="Box-sc-g0xbh4-0 cuEKae"><div title="Data do último commit" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 eUGNHp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Data do último commit</font></font></span></div></th></tr></thead><tbody><tr class="Box-sc-g0xbh4-0 jEbBOT"><td colspan="3" class="Box-sc-g0xbh4-0 bTxCvM"><div class="Box-sc-g0xbh4-0 eYedVD"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Último commit</font></font></h2><div data-testid="latest-commit" class="Box-sc-g0xbh4-0 drtGBr"><div class="Box-sc-g0xbh4-0 eScEiW"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 hLLhje"><a href="https://github.com/marcelopaludetto" data-testid="avatar-icon-link" data-hovercard-url="/users/marcelopaludetto/hovercard" class="Link__StyledLink-sc-14289xe-0 dheQRw"><img alt="marcelopaludetto" size="20" src="./principal_files/78444171" data-testid="github-avatar" aria-label="marcelopaludetto" height="20" width="20" class="Avatar__StyledAvatar-sc-2lv0r8-0 kYMvPL"></a><a href="https://github.com/alura-cursos/js-projeto/commits?author=marcelopaludetto" aria-label="comete por marcelopaludetto" data-hovercard-url="/users/marcelopaludetto/hovercard" class="Link__StyledLink-sc-14289xe-0 XuJeD"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">marcelopaludetto</font></font></a></div><span class=""></span></div><div class="Box-sc-g0xbh4-0 fqNQBl react-last-commit-message"><div class="Box-sc-g0xbh4-0 jEKUjt Truncate"><span class="Text-sc-17v1xeu-0 gPDEWA Truncate-text" data-testid="latest-commit-html"><a href="https://github.com/alura-cursos/js-projeto/commit/32c1fc50579c61aa0d8cdecdf50d4fb66df0c304" class="Link--secondary" data-pjax="true" data-hovercard-url="/alura-cursos/js-projeto/commit/32c1fc50579c61aa0d8cdecdf50d4fb66df0c304/hovercard"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aula-10</font></font></a></span></div></div><span class="Text-sc-17v1xeu-0 bESgln react-last-commit-summary-timestamp"><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-07T18:31:32.000Z" title="7 de agosto de 2023, 15h31 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7 de agosto de 2023</font></font></relative-time></span></div><div data-testid="latest-commit-details" class="Box-sc-g0xbh4-0 lhFvfi"><span class="Text-sc-17v1xeu-0 bESgln react-last-commit-oid-timestamp"><a class="Link__StyledLink-sc-14289xe-0 dheQRw Link--secondary" aria-label="Confirmar 32c1fc5" href="https://github.com/alura-cursos/js-projeto/commit/32c1fc50579c61aa0d8cdecdf50d4fb66df0c304"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">32c1fc5</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;·&nbsp;</font></font><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-07T18:31:32.000Z" title="7 de agosto de 2023, 15h31 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7 de agosto de 2023</font></font></relative-time></span><span class="Text-sc-17v1xeu-0 bESgln react-last-commit-timestamp"><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-07T18:31:32.000Z" title="7 de agosto de 2023, 15h31 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7 de agosto de 2023</font></font></relative-time></span></div><div class="Box-sc-g0xbh4-0 jGfYmh"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">História</font></font></h2><a class="types__StyledButton-sc-ws60qy-0 fAkXQN react-last-commit-history-group" href="https://github.com/alura-cursos/js-projeto/commits/aula-10/" data-size="small"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text"><span class="Text-sc-17v1xeu-0 dALsKK"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">22 Comprometimentos</font></font></span></span></span></a><div class="Box-sc-g0xbh4-0 bqgLjk"><button data-component="IconButton" type="button" aria-label="Abrir detalhes do commit" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 iGsLPX"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button></div><span role="tooltip" aria-label="Histórico de commits" id=":R92j8pab:" class="Tooltip__TooltipBase-sc-17tf59c-0 gNgnVl tooltipped-n"><a class="types__StyledButton-sc-ws60qy-0 fAkXQN react-last-commit-history-icon" href="https://github.com/alura-cursos/js-projeto/commits/aula-10/"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></td></tr><tr class="react-directory-row undefined" id="folder-row-0"><td class="react-directory-row-name-cell-small-screen" colspan="2"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="LICENÇA" aria-label="LICENÇA, (Arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/LICENSE"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LICENÇA</font></font></a></div></h3></div></div></td><td class="react-directory-row-name-cell-large-screen" colspan="1"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="LICENÇA" aria-label="LICENÇA, (Arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/LICENSE"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LICENÇA</font></font></a></div></h3></div></div></td><td class="react-directory-row-commit-cell"><div><div class="react-directory-commit-message"><a data-pjax="true" title="Confirmação inicial" class="Link--secondary" href="https://github.com/alura-cursos/js-projeto/commit/fe22cee9b9e2e5808cc92453fc8accdad69ee246"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Confirmação inicial</font></font></a></div></div></td><td><div class="react-directory-commit-age"><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-04T12:24:02.000Z" title="4 de agosto de 2023, 9h24 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">9 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4 de agosto de 2023</font></font></relative-time></div></td></tr><tr class="react-directory-row undefined" id="folder-row-1"><td class="react-directory-row-name-cell-small-screen" colspan="2"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="index.html" aria-label="index.html, (arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/index.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html</font></font></a></div></h3></div></div></td><td class="react-directory-row-name-cell-large-screen" colspan="1"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="index.html" aria-label="index.html, (arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/index.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html</font></font></a></div></h3></div></div></td><td class="react-directory-row-commit-cell"><div><div class="react-directory-commit-message"><a data-pjax="true" title="aula-10" class="Link--secondary" href="https://github.com/alura-cursos/js-projeto/commit/32c1fc50579c61aa0d8cdecdf50d4fb66df0c304"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aula-10</font></font></a></div></div></td><td><div class="react-directory-commit-age"><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-07T18:31:32.000Z" title="7 de agosto de 2023, 15h31 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7 de agosto de 2023</font></font></relative-time></div></td></tr><tr class="react-directory-row undefined" id="folder-row-2"><td class="react-directory-row-name-cell-small-screen" colspan="2"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="principal.js" aria-label="main.js, (arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/main.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">principal.js</font></font></a></div></h3></div></div></td><td class="react-directory-row-name-cell-large-screen" colspan="1"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="principal.js" aria-label="main.js, (arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/main.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">principal.js</font></font></a></div></h3></div></div></td><td class="react-directory-row-commit-cell"><div><div class="react-directory-commit-message"><a data-pjax="true" title="aula-10" class="Link--secondary" href="https://github.com/alura-cursos/js-projeto/commit/32c1fc50579c61aa0d8cdecdf50d4fb66df0c304"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aula-10</font></font></a></div></div></td><td><div class="react-directory-commit-age"><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-07T18:31:32.000Z" title="7 de agosto de 2023, 15h31 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7 de agosto de 2023</font></font></relative-time></div></td></tr><tr class="react-directory-row undefined" id="folder-row-3"><td class="react-directory-row-name-cell-small-screen" colspan="2"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="estilo.css" aria-label="estilo.css, (arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/style.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">estilo.css</font></font></a></div></h3></div></div></td><td class="react-directory-row-name-cell-large-screen" colspan="1"><div class="react-directory-filename-column"><svg aria-hidden="true" focusable="false" role="img" class="color-fg-muted" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg><div class="overflow-hidden"><h3><div class="react-directory-truncate"><a title="estilo.css" aria-label="estilo.css, (arquivo)" class="Link--primary" href="https://github.com/alura-cursos/js-projeto/blob/aula-10/style.css"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">estilo.css</font></font></a></div></h3></div></div></td><td class="react-directory-row-commit-cell"><div><div class="react-directory-commit-message"><a data-pjax="true" title="aula-8" class="Link--secondary" href="https://github.com/alura-cursos/js-projeto/commit/233d41b7621c674732c4489e65458ed093319324"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aula-8</font></font></a></div></div></td><td><div class="react-directory-commit-age"><relative-time class="sc-bcXHqe" tense="past" datetime="2023-08-07T17:09:26.000Z" title="7 de agosto de 2023, 14h09 GMT-3"><template shadowrootmode="open"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8 meses atrás</font></font></template><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7 de agosto de 2023</font></font></relative-time></div></td></tr><tr class="Box-sc-g0xbh4-0 epsqEd d-none" data-testid="view-all-files-row"><td colspan="3" class="Box-sc-g0xbh4-0 ldpruc"><div><button class="Link__StyledLink-sc-14289xe-0 dheQRw"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ver todos os arquivos</font></font></button></div></td></tr></tbody></table></div><div class="Box-sc-g0xbh4-0 ehcSsh"><div class="Box-sc-g0xbh4-0 iGmlUb"><div class="Box-sc-g0xbh4-0 iRQGXA"><h2 class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 rTZSs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Navegação de arquivos do repositório</font></font></h2><nav aria-label="Arquivos de repositório" class="Box-sc-g0xbh4-0 dvTdPK"><ul role="list" class="UnderlineNav__NavigationList-sc-1jfr31k-0 bPgibo"><li class="Box-sc-g0xbh4-0 gwuIGu"><a href="https://github.com/alura-cursos/js-projeto/tree/aula-10#" aria-current="page" class="Link__StyledLink-sc-14289xe-0 vLMkZ"><span data-component="icon" class="Box-sc-g0xbh4-0 kOxwQs"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-law" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path></svg></span><span data-component="text" data-content="License" class="Box-sc-g0xbh4-0 kOgeFj"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Licença</font></font></span></a></li></ul></nav></div><div class="Box-sc-g0xbh4-0 bJMeLZ js-snippet-clipboard-copy-unpositioned" data-hpc="true"><div class="plain"><pre style="white-space: pre-wrap"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Licença MIT</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Copyright (c) 2023 Marcelo Paludetto Rodrigues</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
deste software e arquivos de documentação associados (o "Software"), para lidar</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
no Software sem restrições, incluindo, sem limitação, os direitos</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
cópias do Software e permitir que as pessoas a quem o Software é</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
capacitado para fazê-lo, sujeito às seguintes condições:</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
O aviso de direitos autorais acima e este aviso de permissão serão incluídos em todos</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
cópias ou partes substanciais do Software.</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM HIPÓTESE ALGUMA O</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
OS AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTROS</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
RESPONSABILIDADE, SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE,</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
PROGRAMAS.</font></font><font></font>
</pre></div></div></div></div></div></div> <!-- --> <!-- --> <script type="application/json" id="__PRIMER_DATA_:R0:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

        <input type="hidden" data-csrf="true" value="roAZtTTFUJb8/sAJq+i0uXOkmKJEmfQUzRB65IjP35Ov76MQHZJ6PHpdU/oSqcyDFMXJdZ8KFBShh/InWmShEQ==">
</div>
  <div data-view-component="true" class="Layout-sidebar">      

      <div class="BorderGrid about-margin" data-pjax="">
        <div class="BorderGrid-row">
          <div class="BorderGrid-cell">
            <div class="hide-sm hide-md">
  <h2 class="mb-3 h4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sobre</font></font></h2>

      <div class="my-3 d-flex flex-items-center">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link flex-shrink-0 mr-2">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
</svg>
        <span class="flex-auto min-width-0 css-truncate css-truncate-target width-fit">
          <a title="https://marcelopaludetto.github.io/js-projeto/" role="link" target="_blank" rel="noopener noreferrer nofollow" class="text-bold" href="https://marcelopaludetto.github.io/js-projeto/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">marcelopaludetto.github.io/js-projeto/</font></font></a>
        </span>
      </div>



  
    <h3 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Licença</font></font></h3>
  <div class="mt-2">
    <a href="https://github.com/alura-cursos/js-projeto/blob/main/LICENSE" class="Link--muted" data-analytics-event="{&quot;category&quot;:&quot;Repository Overview&quot;,&quot;action&quot;:&quot;click&quot;,&quot;label&quot;:&quot;location:sidebar;file:license&quot;}">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-law mr-2">
    <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
</svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     Licença MIT
    </font></font></a>
  </div>




  <include-fragment src="/alura-cursos/js-projeto/hovercards/citation/sidebar_partial?tree_name=aula-10" class="is-error"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
  </include-fragment>

  <div class="mt-2">
    <a href="https://github.com/alura-cursos/js-projeto/activity" data-view-component="true" class="Link Link--muted">
      <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pulse mr-2">
    <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
</svg>
      <span class="color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Atividade</font></font></span>
</a>  </div>

    <div class="mt-2">
      <a href="https://github.com/alura-cursos/js-projeto/custom-properties" data-view-component="true" class="Link Link--muted">
        <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-note mr-2">
    <path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path>
</svg>
        <span class="color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Propriedades personalizadas</font></font></span>
</a>    </div>

  <h3 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Estrelas</font></font></h3>
  <div class="mt-2">
    <a href="https://github.com/alura-cursos/js-projeto/stargazers" data-view-component="true" class="Link Link--muted">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-2">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
      <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
      estrelas
</font></font></a>  </div>

  <h3 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Observadores</font></font></h3>
  <div class="mt-2">
    <a href="https://github.com/alura-cursos/js-projeto/watchers" data-view-component="true" class="Link Link--muted">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye mr-2">
    <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
</svg>
      <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
      assistindo
</font></font></a>  </div>

  <h3 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Garfos</font></font></h3>
  <div class="mt-2">
    <a href="https://github.com/alura-cursos/js-projeto/forks" data-view-component="true" class="Link Link--muted">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>
      <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">90</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
      garfos
</font></font></a>  </div>

    <div class="mt-2">
      <a class="Link--muted" href="https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Falura-cursos%2Fjs-projeto&amp;report=alura-cursos+%28user%29"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Repositório de relatórios
</font></font></a>    </div>
</div>

          </div>
        </div>

        
            <div class="BorderGrid-row">
              <div class="BorderGrid-cell">
                <h2 class="h4 mb-3" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
  <a href="https://github.com/alura-cursos/js-projeto/releases" data-view-component="true" class="Link--primary no-underline Link" data-turbo-frame="repo-content-turbo-frame"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    Lançamentos
</font></font></a></h2>

    <div class="text-small color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nenhum lançamento publicado</font></font></div>

              </div>
            </div>

        
        
            <div class="BorderGrid-row">
              <div class="BorderGrid-cell">
                <h2 class="h4 mb-3">
  <a href="https://github.com/orgs/alura-cursos/packages?repo_name=js-projeto" data-view-component="true" class="Link--primary no-underline Link d-flex flex-items-center"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    Pacotes
      </font></font><span title="0" hidden="hidden" data-view-component="true" class="Counter ml-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span>
</a></h2>


      <div class="text-small color-fg-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        Nenhum pacote publicado</font></font><br>
      </div>



              </div>
            </div>

        
        
        
        
            <div class="BorderGrid-row">
              <div class="BorderGrid-cell">
                <h2 class="h4 mb-3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">línguas</font></font></h2>
<div class="mb-2">
  <span data-view-component="true" class="Progress">
    <span style="background-color:#e34c26 !important;;width: 58.7%;" itemprop="keywords" aria-label="HTML58.7" data-view-component="true" class="Progress-item color-bg-success-emphasis"></span>
    <span style="background-color:#563d7c !important;;width: 23.2%;" itemprop="keywords" aria-label="CSS 23.2" data-view-component="true" class="Progress-item color-bg-success-emphasis"></span>
    <span style="background-color:#f1e05a !important;;width: 18.1%;" itemprop="keywords" aria-label="JavaScript 18.1" data-view-component="true" class="Progress-item color-bg-success-emphasis"></span>
</span></div>
<ul class="list-style-none">
    <li class="d-inline">
        <span class="d-inline-flex flex-items-center flex-nowrap text-small mr-3">
          <svg style="color:#e34c26;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
</svg>
          <span class="color-fg-default text-bold mr-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></span>
          <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">58,7%</font></font></span>
        </span>
    </li>
    <li class="d-inline">
        <span class="d-inline-flex flex-items-center flex-nowrap text-small mr-3">
          <svg style="color:#563d7c;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
</svg>
          <span class="color-fg-default text-bold mr-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS</font></font></span>
          <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">23,2%</font></font></span>
        </span>
    </li>
    <li class="d-inline">
        <span class="d-inline-flex flex-items-center flex-nowrap text-small mr-3">
          <svg style="color:#f1e05a;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill mr-2">
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
</svg>
          <span class="color-fg-default text-bold mr-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></span>
          <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">18,1%</font></font></span>
        </span>
    </li>
</ul>

              </div>
            </div>

              </div>
</div>
  
</div></div>

  </div>


  </div>

</turbo-frame>


    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo">
  <h2 class="sr-only"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rodapé</font></font></h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="Pagina inicial" title="GitHub" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>
      <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
        © 2024 GitHub, Inc.
      </font></font></span>
    </div>

    <nav aria-label="Rodapé">
      <h3 class="sr-only" id="sr-footer-heading"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Navegação no rodapé</font></font></h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Termos</font></font></a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Privacidade</font></font></a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Segurança</font></font></a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Status</font></font></a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Documentos</font></font></a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Contato</font></font></a>
          </li>

          <li class="mr-3">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Gerenciar cookies
    </font></font></button>
  </cookie-consent-link>
</li>

<li class="mr-3">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      Não compartilhe minhas informações pessoais
    </font></font></button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>




    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-initial-cookie-consent-allowed="" data-cookie-consent-required="true" data-catalyst=""></ghcc-consent>


  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Ignorar erro">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    Você não pode executar essa ação neste momento.
  </font></font></div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>




    </div>

    <div id="js-global-screen-reader-notice" class="sr-only" aria-live="polite" aria-atomic="true"></div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only" aria-live="assertive" aria-atomic="true"></div><div id="goog-gt-tt" class="VIpgJd-yAWNEb-L7lbkb skiptranslate" style="border-radius: 12px; margin: 0 0 0 -23px; padding: 0; font-family: &#39;Google Sans&#39;, Arial, sans-serif;" data-id=""><div id="goog-gt-vt" class="VIpgJd-yAWNEb-hvhgNd"><div class=" VIpgJd-yAWNEb-hvhgNd-l4eHX-i3jM8c"><img src="./principal_files/24px.svg" width="24" height="24" alt=""></div><div class=" VIpgJd-yAWNEb-hvhgNd-k77Iif-i3jM8c"><div class="VIpgJd-yAWNEb-hvhgNd-IuizWc" dir="ltr">Texto original</div><div id="goog-gt-original-text" class="VIpgJd-yAWNEb-nVMfcd-fmcmS VIpgJd-yAWNEb-hvhgNd-axAV1"></div></div><div class="VIpgJd-yAWNEb-hvhgNd-N7Eqid ltr"><div class="VIpgJd-yAWNEb-hvhgNd-N7Eqid-B7I4Od ltr" dir="ltr"><div class="VIpgJd-yAWNEb-hvhgNd-UTujCb">Avalie a tradução</div><div class="VIpgJd-yAWNEb-hvhgNd-eO9mKe">O feedback vai ser usado para ajudar a melhorar o Google Tradutor</div></div><div class="VIpgJd-yAWNEb-hvhgNd-xgov5 ltr"><button id="goog-gt-thumbUpButton" type="button" class="VIpgJd-yAWNEb-hvhgNd-bgm6sf" title="Tradução boa" aria-label="Tradução boa" aria-pressed="false"><span id="goog-gt-thumbUpIcon"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z"></path></svg></span><span id="goog-gt-thumbUpIconFilled"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z"></path></svg></span></button><button id="goog-gt-thumbDownButton" type="button" class="VIpgJd-yAWNEb-hvhgNd-bgm6sf" title="Tradução ruim" aria-label="Tradução ruim" aria-pressed="false"><span id="goog-gt-thumbDownIcon"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z"></path></svg></span><span id="goog-gt-thumbDownIconFilled"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z"></path></svg></span></button></div></div><div id="goog-gt-votingHiddenPane" class="VIpgJd-yAWNEb-hvhgNd-aXYTce"><form id="goog-gt-votingForm" action="https://translate.googleapis.com/translate_voting?client=te_lib" method="post" target="votingFrame" class="VIpgJd-yAWNEb-hvhgNd-aXYTce"><input type="text" name="sl" id="goog-gt-votingInputSrcLang"><input type="text" name="tl" id="goog-gt-votingInputTrgLang"><input type="text" name="query" id="goog-gt-votingInputSrcText"><input type="text" name="gtrans" id="goog-gt-votingInputTrgText"><input type="text" name="vote" id="goog-gt-votingInputVote"></form><iframe name="votingFrame" frameborder="0" src="./principal_files/saved_resource.html"></iframe></div></div></div>
  


</body></html>