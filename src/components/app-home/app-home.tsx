import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() timers: string[] = [];

  addTimer() {
    this.timers = [...this.timers, 'Untitled'];
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
          <ion-buttons slot="end">
            <ion-button
              onClick={() => {
                this.addTimer();
              }}
              color="primary"
            >
              <ion-icon slot="icon-only" name="add"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        {this.timers.map(timer => (
          <app-timer></app-timer>
        ))}
      </ion-content>,
    ];
  }
}
