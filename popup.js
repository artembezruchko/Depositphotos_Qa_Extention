

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', () => {

//    CREATE USERS
      document.getElementById('1').onclick = function() {
      	 let cookie = document.getElementById('0').value + ';'
          + 'document.cookie ="10_feature_test_bb938a37e85cd63af74d5a042c578a28_value=0";';
         chrome.tabs.executeScript({
           code: cookie.toString() + ' ' + getCorrectEnv.toString() + ' '  + registreNewUser.toString() + clearStorage.toString() + ' clearStorage();' + ' '   + ' registreNewUser();'
          });
      }

      document.getElementById('2').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + fillNewSubAccountForm.toString() + ' fillNewSubAccountForm();'
          });
      }

      document.getElementById('3').onclick = function() {
         chrome.tabs.executeScript({
           code: ''// TODO
          });
      }

//    OPEN PAGES
      document.getElementById('6').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openMem1151.toString() + ' openMem1151();'
          });
      }

      document.getElementById('7').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openBundle1152.toString() + ' openBundle1152();'
          });
      }

      document.getElementById('8').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openMem1204.toString() + ' openMem1204();'
          });
      }

      document.getElementById('9').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openSubs620.toString() + ' openSubs620();'
          });
      }

      document.getElementById('10').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openOdd4.toString() + ' openOdd4();'
          });
      }

      document.getElementById('11').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openSubs623.toString() + ' openSubs623();'
          });
      }

      document.getElementById('12').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openOdd54.toString() + ' openOdd54();'
          });
      }

      document.getElementById('page_Sub').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openSubscribe.toString() + ' openSubscribe();'
          });
      }

      document.getElementById('page_Sub_corp').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openSubscribeCorporate.toString() + ' openSubscribeCorporate();'
          });
      }

      document.getElementById('page_image').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openImage.toString() + ' openImage();'
          });
      }

      document.getElementById('page_video').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openVideo.toString() + ' openVideo();'
          });
      }

      document.getElementById('page_merchant').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openMerchant.toString() + ' openMerchant();'
          });
      }

      document.getElementById('page_invoices').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openInvoices.toString() + ' openInvoices();'
          });
      }

      document.getElementById('page_profile').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openProfile.toString() + ' openProfile();'
          });
      }

       document.getElementById('page_a_profile').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' '  + loginAdmin.toString() + ' ' + setAdminCookie.toString() + ' loginAdmin();'
          });
      }

      document.getElementById('page_a_set_cookie').onclick = function() {
         chrome.tabs.executeScript({
           code:  setAdminCookie.toString()  + ' setAdminCookie();'
          });
      }

//    API BUYING
      document.getElementById('13').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openAPI.toString() + ' openAPI();'
          });
      }

       document.getElementById('14').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + loginViaApi.toString() + ' loginViaApi();'
          });
      }

      document.getElementById('Mem1151').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1151, "membership");'
          });
      }

      document.getElementById('Bundle1152').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1152, "bundle");'
          });
      }

      document.getElementById('Subs620').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(620, "subscription");'
          });
      }

      document.getElementById('Odd91').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(91, "ondemand");'
          });
      }

      document.getElementById('Mem1167').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1167, "membership");'
          });
      }

      document.getElementById('Bundle1153').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1153, "bundle");'
          });
      }

      document.getElementById('Subs1200').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1200, "subscription");'
          });
      }

      document.getElementById('Odd4').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(4, "ondemand");'
          });
      }

      //CONNECTUM
      document.getElementById('c_Mem1151').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1151, "membership", "connectum");'
          });
      }

      document.getElementById('c_Bundle1152').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1152, "bundle", "connectum");'
          });
      }

      document.getElementById('c_Subs620').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(620, "subscription", "connectum");'
          });
      }

      document.getElementById('c_Odd91').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(91, "ondemand", "connectum");'
          });
      }

      document.getElementById('c_Mem1167').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1167, "membership", "connectum");'
          });
      }

      document.getElementById('c_Bundle1153').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1153, "bundle", "connectum");'
          });
      }

      document.getElementById('c_Subs1200').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(1200, "subscription", "connectum");'
          });
      }

      document.getElementById('c_Odd4').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + buyProductViaAPi.toString() + ' buyProductViaAPi(4, "ondemand", "connectum");'
          });
      }


//    GENERAL STATS
       document.getElementById('PD_mem').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openPurchaseDetailsMembership.toString() + ' openPurchaseDetailsMembership();'
          });
      }

       document.getElementById('PD_odd').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openPurchaseDetailsOndemand.toString() + ' openPurchaseDetailsOndemand();'
          });
      }

       document.getElementById('PD_sub').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openPurchaseDetailsSubscription.toString() + ' openPurchaseDetailsSubscription();'
          });
      }

       document.getElementById('PD_credit').onclick = function() {
         chrome.tabs.executeScript({
           code: getCorrectEnv.toString() + ' ' + openPurchaseDetailsCredits.toString() + ' openPurchaseDetailsCredits();'
          });
      }
        chrome.tabs.query({
            active: true,
            currentWindow: true
        },  function(tabs) {
              var tabURL = tabs[0].url;
              console.log(tabs[0]);
            });
});

function getCorrectEnv () {
    let url = location.hostname.split('.');
    let newUrl;
    let urlSuf = url[url.length - 1];
    if(urlSuf == 'net' || urlSuf == 'dev' || urlSuf == 'com') {
        if (url.length == 3) {
            newUrl = url[1] + '.' + url[2] 
        }
        if (url.length == 2) {
            newUrl = url[0] + '.' + url[1] 
        }
        let host = newUrl.split('.')[0];
        if ( host != 'master' && host != 'depositphotos' && host != 'integration' &&  urlSuf == 'dev') {
            return newUrl;
        }

        switch(newUrl){
            case 'master.dev':
            case 'depositphotos.net':
            case 'depositphotos.com':
            case 'integration.dev':
                return newUrl;
            default:
                return 'depositphotos.net';
        }
    } else {
        return 'depositphotos.net';
    }
};

function clearStorage() {
  chrome.storage.local.clear(function() {});
};

function registreNewUser() {
  const singUp = window.open('https://' + getCorrectEnv() +'/signup.html');
  singUp.onload = function() {
      const userLogin = 'tester-' + Date.now(); 
      const userEmail = userLogin + '-@depositphotos.com';
      // HERE
      const apiKey = 'here'; 
      chrome.storage.local.set({'userLogin': userLogin, 'userEmail': userEmail, 'apiKey': apiKey}, function() {});

      singUp.document.getElementsByTagName('input')[0].value = userEmail;
      singUp.document.getElementsByTagName('input')[1].value = '123456';
      singUp.document.getElementsByClassName('_submit')[0].click();  
  };
  delete singUp;
  
};

function setAdminCookie() {
    document.cookie ="Test=Test";
    //HERE 
};

function loginAdmin() {
  chrome.storage.local.get(['userId'],function(storage) {
    setAdminCookie();
    const adminPage = window.open('https://admin.' + getCorrectEnv() +'/UserProfile/view/' + storage.userId);
 })
  delete adminPage;
  
};

function fillNewSubAccountForm() {
  const subaccounts = window.open('https://' + getCorrectEnv() + '/subaccounts/create.html');
  subaccounts.onload = function() {
      const loginSub = 'Sub-user-' + Date.now() + '-@depositphotos.com';
      subaccounts.document.getElementsByClassName('input input-xl')[0].value = loginSub;
      subaccounts.document.getElementsByClassName('input input-xl')[1].value ='123456';
      subaccounts.document.getElementsByClassName('input input-xl')[2].value = loginSub;
      delete loginSub;
      subaccounts.document.getElementsByClassName('button button-xl button-blue _submit')[0].click();
      delete subaccounts;
      location.reload();
  }
  
}

// OPEN PAGES

function openMem1151() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&id=1151&product=membership');
}

function openBundle1152() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&product=bundle&id=1152');
}

function openMem1204() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&id=1204&product=membership');
}

function openSubs620() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&product=subscription&id=620');
}

function openOdd4() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&product=ondemand&id=4');
}

function openSubs623() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&product=subscription&scnt=2&id=623');
}

function openOdd54() {
  window.open('https://' + getCorrectEnv() +'/subscribe/billing.html?asxh=1&product=ondemand&scnt=2&id=54');
}

function openSubscribe() {
  window.open('https://' + getCorrectEnv() +'/subscribe.html');
}

function openSubscribeCorporate() {
  window.open('https://' + getCorrectEnv() +'/subscribe/corporate.html');
}

function openImage() {
  window.open('https://' + getCorrectEnv() +'/image.html');
}

function openVideo() {
  window.open('https://' + getCorrectEnv() +'/video.html');
}

function openMerchant() {
  window.open('https://' + getCorrectEnv() +'/merchant.html');
}

function openInvoices() {
  window.open('https://' + getCorrectEnv() +'/invoices.html');
}

function openProfile() {
  window.open('https://' + getCorrectEnv() +'/profile.html');
}

function openAdminBuyerProfile() {
   chrome.storage.local.get(['userId'],function(storage) {
    window.open('https://admin.' + getCorrectEnv() +'/UserProfile/view/' + storage.userId);
   })
  
}

// GS

function openPurchaseDetailsMembership() {
  window.open('https://admin.' + getCorrectEnv() +'/?action=purchase_details&period=today&type=membership&mode=simple&online=1&nocache=1');
}

function openPurchaseDetailsSubscription() {
  window.open('https://admin.' + getCorrectEnv() +'/?action=purchase_details&period=today&type=subscription&mode=simple&online=1&nocache=1');
}

function openPurchaseDetailsOndemand() {
  window.open('https://admin.' + getCorrectEnv() +'/?action=purchase_details&period=today&type=ondemand&mode=simple&online=1&nocache=1');
}

function openPurchaseDetailsCredits() {
  window.open('https://admin.' + getCorrectEnv() +'/?action=purchase_details&period=today&type=credits&mode=simple&online=1&nocache=1');
}


// API

function openAPI() {
  window.open('https://api3.' + getCorrectEnv() +'/');
}

function buyMem1151(){
chrome.storage.local.get(['userEmail', 'userLogin', 'sessionId', 'apikey'], function(storage) {
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api3.' + getCorrectEnv() + '/?' +
      'dp_command=purchaseProductInternal&' +
      'dp_apikey=' + storage.apiKey +'&' +
      'dp_session_id=' + storage.sessionId + '&' +
      'dp_offer_id=1151&' +
      'dp_recurring=1&' +
      'dp_split_count=0&' +
      'dp_card[dp_expiry_month]=10&' +
      'dp_card[dp_expiry_year]=30&' +
      'dp_card[dp_pan]=4124788935525025&' +
      'dp_card[dp_cvv]=123&' +
      'dp_product_type=membership', true);
xhr.onload = function() {
  var response = this.responseText;
  console.info('Purchase success! \n\n buyMem1151 \n\n' + response);
  alert( 'Purchase success! \n\n\n' + response);
  console.info(JSON.parse(response));  
}

xhr.onerror = function() {
  console.error( 'Error \n\n\n' + this.status );
  alert( 'Error \n\n\n' + this.status );
}

xhr.send();
});

};

function loginViaApi() {
   chrome.storage.local.get(['userEmail', 'userLogin', 'apiKey'], function(storage) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api3.' + getCorrectEnv() + '/?'+
     'dp_apikey='+ storage.apiKey +'&'+
     'dp_command=loginAsUser&'+
     'dp_login_user=' + storage.userEmail + '&'+ 
     'dp_login_password=123456&'+
     'version=internal', true);
     xhr.onload = function() {
        const data = this.responseText;
        var sessionId = JSON.parse(data).sessionid;
        var userId = JSON.parse(data).userid
        chrome.storage.local.set({'sessionId': sessionId, 'userId': userId}, function() {});
        console.info('loginViaApi \n\n sessionId = ' + sessionId + '\n userId = ' + userId )
        alert('login Via Api success \n sessionId = ' + sessionId + '\n userId = ' + userId);
        return sessionId;
     }
     xhr.onerror = function() {
        alert( 'Error  loginViaApi \n\n\n' + 'STATUS: ' + this.status + '\n\n\n BODY' + this.responseText);
        console.error('Error  loginViaApi \n\n\n' + 'STATUS: ' + this.status + '\n\n\n BODY' + this.responseText);
     }
     xhr.send();
  });
};  

function buyProductViaAPi(offerId, productType, paymentSystem) {
  if(!paymentSystem) {
    paymentSystem = 'mes'
  }
chrome.storage.local.get(['userEmail', 'userLogin', 'sessionId', 'apiKey'], function(storage) {
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api3.' + getCorrectEnv() + '/?' +
      'dp_command=purchaseProductInternal&' +
      'dp_apikey='+ storage.apiKey +'&' +
      'dp_session_id=' + storage.sessionId + '&' +
      'dp_offer_id='+ offerId +'&' +
      'dp_recurring=1&' +
      'dp_split_count=0&' +
      'dp_card[dp_expiry_month]=10&' +
      'dp_card[dp_expiry_year]=30&' +
      'dp_card[dp_pan]=4124788935525025&' +
      'dp_card[dp_cvv]=123&' +
      'experimentTokens[10_feature_test_f967c72525307d9dca4f7dc38ee347a2_value]=' + paymentSystem + '&' +
      'dp_product_type=' + productType, true);
xhr.onload = function() {
  var response = this.responseText;
  console.info('Purchase success! \n\n buyMem1151 \n\n' + response);
  alert( 'Purchase success! \n\n\n' + response);
  console.info(JSON.parse(response));  
}

xhr.onerror = function() {
  console.error( 'Error \n\n\n' + this.status );
  alert( 'Error \n\n\n' + this.status );
}

xhr.send();
});

};


