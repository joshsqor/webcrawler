(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_UNMUTE: '21',
      FULL_SCREEN: '22',
      DYNAMIC_CREATIVE_IMPRESSION: '23',
      HTML5_CREATIVE_IMPRESSION: '25'
    },
    exitEvents: [
      {
        name: '970x66 Exit',
        reportingId: '1590079',
        url: 'http://www.22jumpstreetmovie.com/site//?hs308\x3d%epid!M',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Facebook Btn Exit',
        reportingId: '1817770',
        url: 'https://www.facebook.com/JumpStMovies',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Get Tix \x26 Showitmes',
        reportingId: '1761259',
        url: 'http://www.22jumpstreetmovie.com/site//?hs308\x3d%epid!M',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Instagram Btn Exit',
        reportingId: '1761258',
        url: 'http://instagram.com/jumpstmovies',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Main Exit',
        reportingId: '108853',
        url: 'http://www.22jumpstreetmovie.com/site//?hs308\x3d%epid!M',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Tumbler Btn Exit',
        reportingId: '1817767',
        url: 'http://jumpstmovies.tumblr.com/',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Twitter Btn Exit',
        reportingId: '1817769',
        url: 'https://twitter.com/jumpstmovies',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Visit Site',
        reportingId: '1817771',
        url: 'http://www.22jumpstreetmovie.com/site//?hs308\x3d%epid!M',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
      {
        name: 'video1:ViewTime',
        reportingId: '195069',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_VIEW_TIMER'
        }
      },
      {
        name: 'video1_user:ViewTime',
        reportingId: '1817765',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_VIEW_TIMER'
        }
      }
    ],
    counterEvents: [
      {
        name: 'COUNTER : REPLAY VIDEO',
        reportingId: '1364906',
        videoData: null
      },
      {
        name: 'EndFrame : Video  Mute',
        reportingId: '1365058',
        videoData: null
      },
      {
        name: 'EndFrame : Video Replay',
        reportingId: '1365057',
        videoData: null
      },
      {
        name: 'EndFrame : Video Unmute',
        reportingId: '1365059',
        videoData: null
      },
      {
        name: 'video1:Complete',
        reportingId: '195048',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_COMPLETE'
        }
      },
      {
        name: 'video1:Interaction',
        reportingId: '195065',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_INTERACTION'
        }
      },
      {
        name: 'video1:MidPoint',
        reportingId: '195039',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_MIDPOINT'
        }
      },
      {
        name: 'video1:Mute',
        reportingId: '195066',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_MUTE'
        }
      },
      {
        name: 'video1:Pause',
        reportingId: '195060',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_PAUSE'
        }
      },
      {
        name: 'video1:Play',
        reportingId: '195047',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_PLAY'
        }
      },
      {
        name: 'video1:Replay',
        reportingId: '195042',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_REPLAY'
        }
      },
      {
        name: 'video1:Stop',
        reportingId: '195037',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_STOP'
        }
      },
      {
        name: 'video1:Unmute',
        reportingId: '195062',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_UNMUTE'
        }
      },
      {
        name: 'video1_user:Complete',
        reportingId: '1817763',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_COMPLETE'
        }
      },
      {
        name: 'video1_user:Interaction',
        reportingId: '1817775',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_INTERACTION'
        }
      },
      {
        name: 'video1_user:MidPoint',
        reportingId: '1817766',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_MIDPOINT'
        }
      },
      {
        name: 'video1_user:Mute',
        reportingId: '1817772',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_MUTE'
        }
      },
      {
        name: 'video1_user:Pause',
        reportingId: '1817774',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_PAUSE'
        }
      },
      {
        name: 'video1_user:Play',
        reportingId: '1817762',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_PLAY'
        }
      },
      {
        name: 'video1_user:Replay',
        reportingId: '1817768',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_REPLAY'
        }
      },
      {
        name: 'video1_user:Stop',
        reportingId: '1817764',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_STOP'
        }
      },
      {
        name: 'video1_user:Unmute',
        reportingId: '1817773',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1_user',
          associatedStandardVideoEvent: 'VIDEO_UNMUTE'
        }
      }
    ],
    childFiles: [
      {
        name: '22js_924x50_pencil.swf',
        url: '/ads/richmedia/studio/pv2/31401626/20140522132736990/22js_924x50_pencil.swf',
        isVideo: false
      },
      {
        name: '22js_924x250_auto.swf',
        url: '/ads/richmedia/studio/pv2/31401626/20140522132736990/22js_924x250_auto.swf',
        isVideo: false
      },
      {
        name: '22js_924x250_user.swf',
        url: '/ads/richmedia/studio/pv2/31401626/20140522132736990/22js_924x250_user.swf',
        isVideo: false
      },
      {
        name: '22JS_924x50_noguns_backup.jpg',
        url: '/ads/richmedia/studio/pv2/31401626/20140522132736990/22JS_924x50_noguns_backup.jpg',
        isVideo: false
      }
    ],
    videoFiles: [
      {
        name: '924x250.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/d5b9d2f744fdd08d/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545673351/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/3DDF122BE4B518092699B5754A36C385E147834E.1E4FE82063CBB42CA0A85CD9A01DAB6B2D6E2F97/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/d5b9d2f744fdd08d/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545673351/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEcOblcbbiaadBcaaWatdZdfbVd_b6add1-btHqch-x14qa-0smsWourj4JFmrFODmCt\x26aifp\x3dv001\x26slist\x3did/d5b9d2f744fdd08d/itag/15'
      },
      {
        name: '416x224.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/377f3fc25c5b1161/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545673351/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/369536B0B6794D11EC7FC5A4FBB3546B685649.80F47C35C44DFE4D8E7EE053D092F10E8C783DFA/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/377f3fc25c5b1161/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3545673351/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEcId.aUdzaZd2a_bnckaVcraldJa7aubS-btHqch-x14qa-4unq1qrrk4GDpsAQujIs\x26aifp\x3dv001\x26slist\x3did/377f3fc25c5b1161/itag/15'
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'video1',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '',
        mediumBandwidthVideo: '',
        highBandwidthVideo: '924x250.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      },
      {
        reportingIdentifier: 'video1_user',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '',
        mediumBandwidthVideo: '',
        highBandwidthVideo: '416x224.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '31449850',
        artworkType: 'FLASH',
        displayType: 'EXPANDING_BANNER',
        width: '924',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/31401626/20140522132736990/22js_924x250_main.swf',
        zIndex: '999988',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '2',
          wmode: 'transparent',
          sdkVersion: '2.3.1'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: {
          collapsedRect: {
            left: 0,
            top: 0,
            width: 924,
            height: 50
          },
          isPushdown: true,
          pushdownAnimationTime: 0,
          expansionMode: 'NORMAL'
        },
        imageGalleryTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'expanding';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '1401225351449';
  var adId = '0';
  var templateVersion = '200_40';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
