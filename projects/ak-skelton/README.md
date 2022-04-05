# AkSkelton

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Installation

Run `install ak-skelton library by running the following command`. 

```sh
npm i ak-skelton
```

add `AkSkeltonModule` to your angular modules like `app.module.ts`.

Examples Code for usage.

-- Whenever isLoading is true then it will starts display the skelton placeholder to indicate loader progress.

```
<div class="flex">
  <p>Test 1:</p>
  <p *skeleton="isLoading; 
                height: '50px'; 
                width: '500px'">
  </p>
</div>

<section class="flex">
  <p>Test Dynamically create:</p>
  <ng-container *skeleton="isLoading; 
                           repeat: 5; 
                           className: 'mb-2'; 
                           height: '100px';
                           width: '500px'">
<!-- content goes here -->
    <div *ngFor="let num of [1,2, 3]">
      {{ num }}
    </div>

  </ng-container>
</section>

<p>Test Randon width :</p>
<ng-container *skeleton="isLoading; 
                         repeat: 5; 
                         className: 'mb-2'; 
                         height: '30px'; 
                         width: 'rand'">
  <!-- content goes here -->
  <div *ngFor="let num of [1,2, 3, 4, 5]">
    {{ num }}
  </div>

</ng-container>
```