!function e(n,o,r){function t(i,f){if(!o[i]){if(!n[i]){var s="function"==typeof require&&require;if(!f&&s)return s(i,!0);if(a)return a(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var c=o[i]={exports:{}};n[i][0].call(c.exports,function(e){var o=n[i][1][e];return t(o?o:e)},c,c.exports,e,n,o,r)}return o[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)t(r[i]);return t}({1:[function(e,n,o){!function(){function e(){o.classList.toggle("nav__show"),r.classList.toggle("fondo-menu__show")}var n=document.getElementById("header--button"),o=document.getElementById("header--nav"),r=document.getElementById("fondo-menu");n.addEventListener("click",e),window.addEventListener("scroll",function(){console.log("asd"),console.log(window.pageYOffset),window.pageYOffset>=52&&$(".cabecera").addClass("cabecera__fix"),window.pageYOffset<52&&$(".cabecera").removeClass("cabecera__fix"),window.pageYOffset>=108&&($(".header").addClass("header__fix"),$(".container").addClass("container__fix")),window.pageYOffset<108&&($(".header").removeClass("header__fix"),$(".container").removeClass("container__fix"))})}()},{}]},{},[1]);