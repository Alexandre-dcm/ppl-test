## Installation

### Whole app runs on Node 18
```nvm use 18```

Make sur you have yarn installed\
```npm install -g yarn```

### Initialize hospital server
```cdyy```\
```yarn install```\
```yarn start```

Open new terminal

**Warning : Nvm sometimes switch version of node between folders**: Make sure you're still at version 18

### Link hospital-lib to Vue app
```cd hospital-lib```\
```yarn link```

### Initialize vue app
```cd hospital-fe```\
```yarn install``` or ```npm install``` if you encounter problems\
```yarn link hospital-lib```\
```yarn dev```

#### App now runs on localhost:5173 !

