# How to add PulsePoint Pixels in a React website

This simple React site can be found here. This website has been built using Vite + React

The website has 3 main pages, that consist of:

- Home
- Second Page
- Third Page

The routes to these pages are built using React Router in it`s basic form, a good tutorial can be found on the [React Router Site](https://reactrouter.com/en/6.14.1/start/tutorial) all routes are created in `src/main.jsx`


### GTM React Module Event Types

The react-gtm-module library allows you to push various types of events to the Google Tag Manager (GTM) data layer. Here are some commonly used event types:

Page View:
    Event Name: `page_view`
    Description: Indicates that a new page has been viewed or loaded.

Custom Event:
    Event Name: You can define a custom event name of your choice.
    Description: Used to track custom interactions or actions on your website.

Button Click:
    Event Name: `button_click` (or any custom name you choose)
    Description: Tracks when a button is clicked.

Form Submit:
    Event Name: `form_submit` (or any custom name you choose)
    Description: Tracks when a form is submitted.

Link Click:
    Event Name: `link_click` (or any custom name you choose)
    Description: Tracks when a link is clicked.

Video Play:
    Event Name: `video_play` (or any custom name you choose)
    Description: Tracks when a video starts playing.

Video Pause:
    Event Name: `video_pause` (or any custom name you choose)
    Description: Tracks when a video is paused.

Video Complete:
    Event Name: `video_complete` (or any custom name you choose)
    Description: Tracks when a video playback is completed.

These are just a few examples of event types you can use with react-gtm-module. You can define your own custom event names based on the specific interactions or actions you want to track in your application.

Remember to configure the corresponding tags, triggers, and variables in Google Tag Manager based on the event types you`re using.