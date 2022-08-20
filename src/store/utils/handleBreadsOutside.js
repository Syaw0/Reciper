import defaultRoutes from './defaultRoutes';

const handleBreadsOutside = (pagename) => {
  const newBread = [];
  defaultRoutes[pagename].split('/').forEach((bread, index) => {
    newBread.push({
      name: bread,
      level: index,
    });
  });
  return newBread;
};

export default handleBreadsOutside;
