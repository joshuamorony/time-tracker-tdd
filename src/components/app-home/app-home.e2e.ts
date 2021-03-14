import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { AppHomePageObject } from './app-home.po';

describe('app-home', () => {
  const homePage = new AppHomePageObject();
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<app-home></app-home>');
  });

  it('renders', async () => {
    const element = await homePage.getHostElement(page);
    expect(element).toHaveClass('hydrated');
  });

  it('adds a timer element to the page when the add button is clicked', async () => {
    // Arrange
    const timerElementsBefore = await homePage.getAllTimerElements(page);
    const timerCountBefore = timerElementsBefore.length;

    const addButtonElement = await homePage.getAddButton(page);

    // Act
    await addButtonElement.click();

    // Assert
    const timerElementsAfter = await homePage.getAllTimerElements(page);
    const timerCountAfter = timerElementsAfter.length;

    expect(timerCountAfter).toEqual(timerCountBefore + 1);
  });

  it('can display timers that display the total time elapsed', async () => {});
});
