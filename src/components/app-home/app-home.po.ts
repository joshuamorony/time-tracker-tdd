import { E2EElement, E2EPage } from '@stencil/core/testing';

export class AppHomePageObject {
  getHostElement(page: E2EPage): Promise<E2EElement> {
    return page.find('app-home');
  }

  getAllTimerElements(page: E2EPage): Promise<E2EElement[]> {
    return page.findAll('app-timer');
  }

  getAddButton(page: E2EPage): Promise<E2EElement> {
    return page.find('app-home ion-toolbar ion-button');
  }
}
