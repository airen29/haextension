import select from 'select-dom';

const leftNavigationSelector = '.menuLeft';

export default () => {
  const leftNavigation = select(leftNavigationSelector);

  if (leftNavigation) {
    leftNavigation.setAttribute("style", "width: inherit; position: fixed;"); 
  }
}
