import mainStore from '../mainStore';

const handleBreadsInternal = (pagename) => {
  // this will return an new breads to set in current breads
  const currentBreads = mainStore.getState().breadCrumbs;
  const { setCurrentPage } = mainStore.getState();
  // last breads is not clickable
  // lets create a new breads and put it into setCurrentPage with new page name
  if (currentBreads[currentBreads.length - 1].name !== pagename.target.innerHTML) {
    const newBreads = currentBreads.slice(0, Number(pagename.target.id.split(' ')[1]) + 1);
    setCurrentPage(newBreads[newBreads.length - 1].name, newBreads);
  } 
};

export default handleBreadsInternal;
