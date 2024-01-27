function pad(n, width, z) {
    z = z || '<span style="opacity: 0.6">0</span>';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  
  function MoneyUpdate(money) {
      const block = document.getElementById('hud-money');
      const formattedMoney = Number(money).toLocaleString('ru-RU').replace(/,/g, '.');
      block.innerHTML = formattedMoney + ' ₽';
  }
  
  var show_speed = 0;
  
  function notify_right_text(type, text, color, right_text) {
      var frame = document.getElementById("notify-bock-frame");   
      let test = document.querySelectorAll('.notify-bock'); 
    
      if(test.length >= 3) {
          document.getElementsByClassName("notify-bock")[0].remove();
      }
              
      var div = document.createElement("div");
      div.className = "notify-bock";
      div.style = `background: linear-gradient(to right, #${color}, #${color}21);`;
      frame.append(div);
  
      var background = document.createElement("div");
      background.id = "background-png-notify";
      div.append(background);
                  
      var img = document.createElement("img");
      img.src = `img/notify/bock/notify${type}.png`;
      img.id = "notify-img";
      img.width = "30";
      background.append(img);
  
      var content = document.createElement("div");
      content.id = "notify-text";
      content.innerHTML = text;
      div.append(content);
  
      var rtext = document.createElement('div');
  
      rtext.innerHTML = right_text;
      rtext.style = "margin-left: auto; padding-left: 10px; margin-right: 7px; font-size: 0.9vw; font-family: 'Font 900';";
      div.append(rtext);           
      
      var animation = div.animate([{ opacity: '0' }, { opacity: '1', }], 500);
      animation.addEventListener('finish', function() {
          setTimeout(function () {
          var finish_animation = div.animate([{ opacity: '1' }, { opacity: '0', }], 500);
              finish_animation.addEventListener('finish', function() {
                  div.style = "display: none";
                  div.innerHTML = '';
              });
          }, 4500);   
      }); 
  }
  
  function notify_right_text_no_img(text, color, right_text) {
      var frame = document.getElementById("notify-bock-frame");   
      let test = document.querySelectorAll('.notify-bock'); 
      console.log(test.length);    
              
      if(test.length >= 3) {
          document.getElementsByClassName("notify-bock")[0].remove();
      }
              
      var div = document.createElement("div");
      div.className = "notify-bock";
      frame.append(div);
  
      div.style = `background: linear-gradient(to right, #${color}, #${color}21); padding: 15px; padding-left: 5px;`;
      
      var content = document.createElement("div");
      content.id = "notify-text";
      content.innerHTML = text;
      div.append(content);
  
      var rtext = document.createElement('div');
      rtext.innerHTML = right_text;
      rtext.style = "margin-left: auto; margin-right: 5px; font-size: 0.9vw; font-family: 'Font 900';";
      div.append(rtext);         
      
      var animation = div.animate([{ opacity: '0' }, { opacity: '1', }], 500);
      animation.addEventListener('finish', function() {
          setTimeout(function () {
          var finish_animation = div.animate([{ opacity: '1' }, { opacity: '0', }], 500);
              finish_animation.addEventListener('finish', function() {
                  div.style = "display: none";
                  div.innerHTML = '';
              });
          }, 4500);   
      }); 
  }
  
  function notify(type, text, color) {
      var frame = document.getElementById("notify-bock-frame");   
      let test = document.querySelectorAll('.notify-bock'); 
      console.log(test.length);    
              
      if(test.length >= 3) {
          document.getElementsByClassName("notify-bock")[0].remove();
      }
              
      var div = document.createElement("div");
      div.className = "notify-bock";
      div.style = `background: linear-gradient(to right, #${color}, #${color}21);`;
      frame.append(div);
  
      var background = document.createElement("div");
      background.id = "background-png-notify";
      div.append(background);
                  
      var img = document.createElement("img");
      img.src = `img/notify/bock/notify${type}.png`;
      img.id = "notify-img";
      img.width = "30";
      background.append(img);
      
      var content = document.createElement("div");
      content.id = "notify-text";
      content.innerHTML = text;
      div.append(content);
       
      
      var animation = div.animate([{ opacity: '0' }, { opacity: '1', }], 500);
      animation.addEventListener('finish', function() {
          setTimeout(function () {
          var finish_animation = div.animate([{ opacity: '1' }, { opacity: '0', }], 500);
              finish_animation.addEventListener('finish', function() {
                  div.style = "display: none";
                  div.innerHTML = '';
              });
          }, 4500);   
      }); 
  }
      
      function notifyCenter(type, text) {
          var notify = document.getElementById("notify-center");
          var notify_img = document.getElementById("notify-center-img");
          var notify_text = document.getElementById("notify-center-text");
          var notify_center_color = ["00b7ce", "ff256a", "fe7500", "ffffff", "00cb56"];
      
          notify.style = "display: flex;";
          notify_img.src = `img/notify/icon${type}.png`;
          notify_text.style = `color: #${notify_center_color[type - 1]};`;
          notify_text.innerHTML = text;
      
          setTimeout(function () {
              notify.style = "display: none";
              notify_text.innerHTML = '';
          }, 3500);  
      }
      
      cef.on("show-center-notify", (type, text) => { notifyCenter(type, text); });
      cef.on("show-notify", (type, text, color) => { notify(type, text, color); });
      cef.on("show-notify-right-text", (type, text, color, right_text) => { notify_right_text(type, text, color, right_text); });
      cef.on("show-notify-no-img", (text, color, right_text) => { notify_right_text_no_img(text, color, right_text); });
      cef.on("show-ammo-notify", (text, color) => {
          var notify = document.getElementById("notify-right-bock");
          var notify_img = document.getElementById("notify-right-img");
          var notify_text = document.getElementById("notify-bock-text");
  
          notify.style = `display: flex; background: linear-gradient(to right, #${color}, #${color}21);`;
          notify_img.src = `img/notify/bock/notify1.png`;
          notify_text.innerHTML = text; 
      });
      cef.on("hide-ammo-notify", () => {
          var notify = document.getElementById("notify-right-bock");
          notify.style = "display: none";
          notify_text.innerHTML = '';
      });
      
      cef.on("show-speed", () => {
          document.getElementById("speed-car").style = "display: block";
          show_speed = 1;
      });
      cef.on("hide-speed", () => {
          document.getElementById("speed-car").style = "display: none";
          show_speed = 0;
      });        
      
      function update_icon(icon, value) {
          var cstyle = "";
          if(value === 1) { cstyle="filter: grayscale(0);" }
          else { cstyle="filter: grayscale(1000%);" }
          if(icon === 1) {
              document.getElementById("engine").style = cstyle;
          }
          if(icon === 2) {
              document.getElementById("lock").style = cstyle;
          }
          if(icon === 3) {
              document.getElementById("light").style = cstyle;
          }
          if(icon === 4) {
              document.getElementById("key").style = cstyle;
          }                                    
      }
      
      cef.on("update-speed-icon", (icon, value) => { update_icon(icon, value); });
      cef.on("update-speed-text", (textId, value) => {
          if(textId === 1) {
              document.getElementById("chealth").innerHTML = `${value} %`;
          }
          if(textId === 2) {
              document.getElementById("fuel").innerHTML = `${value} л`;
          }            
          if(textId === 3) {
              document.getElementById("icon-car").innerHTML = `${value} км`;
          }            
      });
      
      cef.on("show-capture-kill", (text) => {
          document.getElementById("capture-kill").style = "display: block";
          document.getElementById("capture-kill").innerHTML = text;
      
          setTimeout(function () {
              document.getElementById("capture-kill").style = "display: none";
              document.getElementById("capture-kill").innerHTML = '';
          }, 3500);    
      });
      
      cef.on("show-capture", () => {
          document.getElementById("capture-info").style = 'display: flex;';
          document.getElementById("kill_list").style = "display: block";
      });
      cef.on("hide-capture", () => {
          document.getElementById("capture-info").style = 'display: none;';
          document.getElementById("kill_list").style = "display: none";
      });        
      cef.on("capture-info-name", (name1, name2) => {
          document.getElementById("name-one").innerHTML = name1;
          document.getElementById("name-two").innerHTML = name2;
      });
      cef.on("capture-score", (score1, score2) => {
          document.getElementById("score-one").innerHTML = score1;
          document.getElementById("score-two").innerHTML = score2;
      });      
      cef.on("capture-time", (time) => {
          document.getElementById("capture-time").innerHTML = time;
      });       
      cef.on("capture-text", (text) => {
          document.getElementById("capture-time-text").innerHTML = text;
      });                  
      function add_kill_list_item(name1, gunId, name2) {
          var count = document.getElementsByClassName('kill-list-item').length;
          if(count >= 5) {
              document.getElementsByClassName('kill-list-item')[0].remove();
          }
          var frame = document.getElementsByClassName("kill-list")[0];
          var item = document.createElement('div');
          item.className = "kill-list-item";
          frame.append(item);
      
          var name_1 = document.createElement('div');
          name_1.innerHTML = name1;
          name_1.className = "kill-list-player";
          item.append(name_1);
      
          var gun = document.createElement('img');
          gun.src = `images/guns/${gunId}.png`;
          gun.className = "kill-list-img";
          item.append(gun);
      
          var name_2 = document.createElement('div');
          name_2.innerHTML = name2;
          name_2.className = "kill-list-player";
          item.append(name_2);
      }
      function update_wanted(wanted_level) {
          for(var i = 0; i < 4; i ++) {
              if(i < wanted_level) {
                  document.getElementById(`wanted_${i}`).style = "opacity: 1";
              }
              else document.getElementById(`wanted_${i}`).style = "opacity: 0.5";
          }
      }
      setInterval(function () {
          var d = new Date();
          var month = d.getMonth() + 1;
         document.getElementById("server-date").innerHTML = d.getDate().toString().padStart(2, '0') + "." + month.toString().padStart(2, '0') + "." + d.getFullYear();
         document.getElementById("server-time").innerHTML = d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0') + ":" + d.getSeconds().toString().padStart(2, '0');
      }, 500);     
      cef.emit("game:hud:setComponentVisible", "interface", false);
      cef.emit("game:data:pollPlayerStats", true, 50);
      cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
  
          if(show_speed === 1) {
              document.getElementById("speed-text").innerHTML = `${Math.round(speed)}<div class="kmh">км/ч</div>`;
          }
      
          document.getElementById("progress-armor").value = `${arm}`;
          document.getElementById('arm-value').innerText = Math.round(arm);
          document.getElementById("progress-hp").value = `${hp}`;
          document.getElementById('hp-value').innerText = Math.round(hp); 
      
          document.getElementById('fist').src = `images/guns/${weapon}.png`;
          if(ammo > 0) {
              document.getElementById("ammo_value_source").style = "display: none;";
              document.getElementById("ammo_value").style = "display: block;";
      
              document.getElementById("ammo_value").innerText = `${ammo} / ${max_ammo}`;
          }
          else {
              document.getElementById("ammo_value_source").style = "display: block;";
              document.getElementById("ammo_value").style = "display: none;";
          }
          MoneyUpdate(money);
      
          if(wanted > 0) {
              document.getElementById("suspect-block").style = "display: block";
              //update_wanted(wanted);
              for(var i = 0; i < 6; i ++) {
                  if(i < wanted) {
                      document.getElementById(`wanted_${i}`).style = "opacity: 1";
                  }
                  else document.getElementById(`wanted_${i}`).style = "opacity: 0.5";
              }
          }
          else {
              document.getElementById("suspect-block").style = "display: none";
          }
      });       
      cef.on("set-hud-run", (value) => {
          document.getElementById('run_progress').value = value;
          document.getElementById('run_value').innerText = value;
      });       
      cef.on("update-player-info", (version, id, uid) => {
          document.getElementById("server-info").innerHTML = ` garizont.ru (v. ${version}/ID: ${id}/UID: ${uid})`;
      });
      cef.on("insert-to-kill", (name1, gunid, name2) => {
          add_kill_list_item(name1, gunid, name2);
      });
      cef.on("clear-kill-list", () => {
          let test = document.querySelectorAll('.kill-list-item'); 
          test.forEach( e => e.remove() );
      });
  
      cef.on("show-fps", () => {
          fpsOut.style = "display: block";
      });
      cef.on("hide-fps", () => {
          fpsOut.style = "display: none";
    });    
    var dialogId = -1, dialog_type = 0, response = 1, listitem = 0, inputtext = "None", max_listitem = 0;

    // create_dialog(0, 2, "Авторизация", "{252525}название задания\tстатус выполнения\tПробег\n1. Пора подзаработать\tНет\tДа\n2. Без связи никуда\tДа\tДа\n3. Тяжелая работа\tЧто\tДа\n4. Высокие деревья\tГде\tДа", "Выбрать", "Закрыть");
    
    function update_color_list(list) {
        if(dialog_type === 2) {
            let dialog_item = document.querySelectorAll('.dialogItem');
            dialog_item.forEach( e => e.className = "dialogItem" );  	
            for(var i = 0; i < document.getElementsByTagName("span").length; i++) {
                document.getElementsByTagName("span")[i].className = "hover";
            }	      
        
            document.getElementsByClassName("dialogItem")[list].className = "dialogItem white_back";
            for( var i = 0; i < document.getElementsByClassName("dialogItem")[list].children.length; i++) {
                document.getElementsByClassName("dialogItem")[list].children[i].className = "hover active_text";
            }	
        
            listitem = document.getElementsByClassName("dialogItem")[list].getAttribute("data-value");        
        }
        else {
            let dialog_item = document.querySelectorAll('.dialogItem');
            dialog_item.forEach( e => e.className = "dialogItem tablist_headers" );  	
            for(var i = 0; i < document.getElementsByTagName("span").length; i++) {
                document.getElementsByTagName("span")[i].className = "hover";
            }	      
        
            document.getElementsByClassName("dialogItem")[list].className = "dialogItem tablist_headers white_back";
            for( var i = 0; i < document.getElementsByClassName("dialogItem")[list].children.length; i++) {
        // 		document.getElementsByClassName("dialogItem")[list].children[i].className = "dialogItemHeader";
        // 	    console.log(document.getElementsByClassName("dialogItem")[list].children);
                var child = document.getElementsByClassName("dialogItem")[list].children[i];
                
               // console.log(child.children.length);
                
                for( var j = 0; j < child.children.length; j++) {
                   // console.log(child.children[j]);
                    child.children[j].className = "active_text";
                }
            }	
        
            listitem = document.getElementsByClassName("dialogItem")[list].getAttribute("data-value");        
        }
    }
    
    window.onclick = function (event) {
        if(dialogId != -1) {
            if(event.target.parentNode.id === "dialogItem") {
                listitem = event.target.parentNode.getAttribute("data-value");
                callcack_dialog_response();		
            }
            if(event.target.id === "dialogItem") {
                if(listitem === event.target.getAttribute("data-value")) {
                    // callcack_dialog_response();
                    return ;
                }
                
                listitem = event.target.getAttribute("data-value");
                update_color_list(listitem);
    
                callcack_dialog_response();
            }
        }
    };
    
    window.addEventListener("keyup", (event) => {
        if(dialogId != -1) {
            if(event.keyCode === 27) {
                response = 0;
                callcack_dialog_response();
            }
            if(event.keyCode === 13) {
                response = 1;
                callcack_dialog_response();
            }
            if(dialog_type === 2 || dialog_type === 5) {
                if(event.keyCode === 40) {
                    if(max_listitem === document.getElementsByClassName("dialogItem")[listitem].getAttribute("data-value")) return ;
                    listitem++;
                    update_color_list(listitem);
                }
                if(event.keyCode === 38) {
                    if(listitem === document.getElementsByClassName("dialogItem")[0].getAttribute("data-value")) return ;
                    listitem --;
                    update_color_list(listitem);
                }
            }
        }
    });
    
    // create_dialog(1, 3, `{FFFFFF}Авторизация`, ``, `Далее`, `Выйти`);
    
    function create_dialog(dialog_id, dialogType, dialogHeader, dialogText, button_1, button_2) {
        // dialogText = "2. {3399ff}Персональные настройки\nОтображение ников\nВключено\n3. {FF6347}Дополнительные услуги\nДа ты нахуй кто такой\n";
    
        dialogId = dialog_id, response = 1, listitem = 0, inputtext = "", dialog_type = dialogType;
    
        if(dialogType === 0 || dialogType === 1 || dialogType === 3) {
            dialogText = dialogText.replace(/[\n]/g, "<br />");
        }
        var replacedColors = dialogText.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
            return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
                return `<span class="hover" style='--i: #${colorInBrackets.slice(1, -1).toLowerCase()}; --g: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
            }) + '</span>';
        });
        var header = dialogHeader.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
            return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
                return `<span class="hover" style='--i: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
            }) + '</span>';
        });	
    
           var element = document.getElementById("dialog_container");
        if(element) { element.remove(); }   
    
        var body = document.getElementsByTagName("body")[0];
        var dialog_container = document.createElement('div');
    
        dialog_container.id = "dialog_container";
        body.append(dialog_container);
    
        var dialog_header = document.createElement('div');
        dialog_header.innerHTML = header;
        dialog_header.className = "dialogHeader";
        dialog_container.append(dialog_header);
    
        if(dialogType === 0 || dialogType === 1 || dialogType === 3) {
            var dialog_text = document.createElement('div');
            dialog_text.innerHTML = replacedColors;
            dialog_text.className = "dialogText";
            dialog_container.append(dialog_text);
    
            if(dialogType === 1 || dialogType === 3) {
                var input = document.createElement('input');
                input.placeholder = "Введите текст в это поле";
                input.id = "dialogInput";
                input.className = "dialog_input";
                input.setAttribute("autofocus", "autofocus");
    // 			document.getElementById('dialog_input').select();
                if(dialogType == 3) { input.setAttribute("type", "password"); }
                dialog_container.append(input);
                
                input.select();
            }	
        }
    
        var dialog_text = document.createElement('div');
        dialog_text.className = "dialogText";
        dialog_container.append(dialog_text);
    
        if(dialogType === 2) {
            var tabulations_delete = replacedColors.replace(/[\t]/, "");
            var lists = tabulations_delete.split(/[\n]/);      
            for(var i = 0; i < lists.length; i ++) {
                if(lists[i].length === 0) continue;
                else if (lists[i] === "</span>") continue;
                var dialog_item = document.createElement("div");
                dialog_item.innerHTML = `${lists[i]}`;     
                dialog_item.id = "dialogItem";
                dialog_item.setAttribute("data-value", i);
    
                if(i === 0) {
                    dialog_item.className = "dialogItem white_back";
    
                    for(var j = 0; j < dialog_item.children.length; j++) {
                        dialog_item.children[j].style = "color: --i: #fff;";
                    }
                }
                   else dialog_item.className = "dialogItem";
                dialog_text.append(dialog_item);
                max_listitem = dialog_item.getAttribute("data-value");
            }
            listitem = document.getElementsByClassName("dialogItem")[0].getAttribute("data-value");
        }
    
        if(dialogType === 5) {
            // var replaceToDIVs = (d) => {
            // 	return d.split("\w").map((s) => `<div class="dialogText">${s}</div>`).join("");
            // }
            var replaceToDIV = (string) => {
                return string.split("\t").map((s) => `<div class="dialogItemHeader">${s}</div>`).join("");
            }
            var lists = replacedColors.split(/[\n]/);
            for(var i = 0; i < lists.length; i ++) {
                if(lists[i].length === 0) continue;
                else if (lists[i] === "</span>") continue;
                var set_tabulation = replaceToDIV(lists[i]);
    
                let count = lists[i].split("\t").length;
    
                if ( i == 0 ) {
                    var dialogTablist = document.createElement('div');
                    dialogTablist.className = "styleDialogTablist tablist_headers";
                    dialogTablist.innerHTML = `${set_tabulation}`;
                    dialog_text.append(dialogTablist);
                    continue;
                }
    
                var dialog_item = document.createElement('div');
    
                if(count === 1) dialog_item.innerHTML = `${lists[i]}`;
                else dialog_item.innerHTML = `${set_tabulation}`;
                dialog_item.id = "dialogItem";
                dialog_item.setAttribute("data-value", i - 1);
                
                if(i == 1) {
                    if(count === 1) dialog_item.className = "dialogItem";
                    else dialog_item.className = "dialogItem tablist_headers white_back";
                }
                else {
                    if(count === 1) dialog_item.className = "dialogItem";
                    else dialog_item.className = "dialogItem tablist_headers";			    
                }
                
                if(lists[i].length === 1) { dialog_item.className = "dialogItem tablist_headers noback"; }
    
                dialog_text.append(dialog_item);
                max_listitem = dialog_item.getAttribute("data-value");
            }
            listitem = document.getElementsByClassName("dialogItem")[0].getAttribute("data-value");	
            update_color_list(0);
        }
    
        var buttons = document.createElement('div');
        buttons.className = "buttons";
        dialog_container.append(buttons);
    
        var btn_1 = document.createElement('div');
        btn_1.innerText = button_1;
        btn_1.className = "clickBtn";
        buttons.append(btn_1);
        
        btn_1.onclick = function () { response = 1; callcack_dialog_response(); };             	
    
        if(button_2 != "") {
            var btn_2 = document.createElement('div');
            btn_2.innerText = button_2;
            btn_2.className = "clickBtn red_btn";
            btn_2.onclick = function () { response = 0; callcack_dialog_response(); };        
            buttons.append(btn_2);
        }
    }
    
    function callcack_dialog_response() {
        cef.set_focus(false);
        if(dialog_type === 1 || dialog_type === 3) {
            var text = document.getElementById("dialogInput").value;
            inputtext = `${text}`;
        }
        cef.emit("callback_dialog_response", dialogId, response, listitem, inputtext);
           dialogId = -1;
           var element = document.getElementById("dialog_container");
        element.remove();               
    }
    
    cef.on("show_dialog", (dId, dType, dHeader, dText, dButton1, dButton2) => {
        create_dialog(dId, dType, dHeader, dText, dButton1, dButton2);
        cef.set_focus(true);
    });
