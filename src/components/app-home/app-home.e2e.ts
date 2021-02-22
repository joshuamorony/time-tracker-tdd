import { newE2EPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');
  });

  it('adds a timer element to the page when the add button is clicked', async () => {

    // Arrange
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const timerElementsBefore = await page.findAll('app-timer');
    const timerCountBefore = timerElementsBefore.length;

    const addButtonElement = await page.find('app-home ion-toolbar ion-button');

    // Act
    await addButtonElement.click();

    // Assert
    const timerElementsAfter = await page.findAll('app-timer');
    const timerCountAfter = timerElementsAfter.length;

    expect(timerCountAfter).toEqual(timerCountBefore + 1);
  });

  it('can display timers that display the total time elapsed', async () => {

  });
});
