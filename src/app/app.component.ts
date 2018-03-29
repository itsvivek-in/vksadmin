import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showLoader = false;

  constructor(/*private communications: CommunicationsService, */private router: Router) {
    

  }

  ngOnInit() {


    var thisElement = this;
    this.router.events
      .subscribe((event) => {
          if(event instanceof NavigationStart) {
            thisElement.showLoader = true;
          }
          else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {

            window.setTimeout(function() 
            {
              thisElement.showLoader = false;
            }, 2000);
              
          }
      });

    $('.slide-toggle-button').sideNav({
      menuWidth: 220, // Default is 300
      draggable: true, // Choose whether you can drag to open on touch screens,
    });

    $(".vks-header-dropdown-user").dropdown({
      belowOrigin: true,
    });

    $('.singleMenu a').click(function(){
      $(this).parent().siblings().removeClass('vks-sidenav-submenu-open').not(this).find('ul').slideUp();
      $(this).parent().addClass('vks-sidenav-submenu-open');
      $(this).parent().find('ul').slideToggle();
    });

    $('.vks-header-dropdown').click(function() {
      if($(this).parent().find('.vks-header-dropdown-panel').is('.vks-header-dropdown-panel-open')) {
        $(this).parent().find('.vks-header-dropdown-panel').removeClass('vks-header-dropdown-panel-open');
      }
      else {
        $(this).parent().find('.vks-header-dropdown-panel').addClass('vks-header-dropdown-panel-open');
      }
    });

    $(document).click(function(event) {
      if($(event.target).is(".vks-header-notification, .vks-header-notification *")) {

      }
      else {

        $(this).find('.vks-header-dropdown-panel').removeClass('vks-header-dropdown-panel-open');

      }
      
    });

  }
}
