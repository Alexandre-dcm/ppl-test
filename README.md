## Installation

### Whole app runs on Node 18
```nvm use 18```

Make sur you have yarn installed\
```npm install -g yarn```

### Initialize hospital server
```cd hospital-be```\
```yarn install```\
```yarn start```

Open new terminal

### Link hospital-lib to Vue app
```cd hospital-lib```\
```yarn link```

### Initialize vue app
```cd hospital-fe```\
```yarn install```\
```yarn link hospital-lib```\
```yarn dev```

#### App now runs on localhost:5173 !

