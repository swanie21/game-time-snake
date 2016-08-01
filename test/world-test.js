const assert = require('chai').assert;
const World = require('../lib/world');
const Snake = require('../lib/snake');
const Food = require('../lib/food');

describe('World', function() {
  context('assigned attributes', function() {
    it('should create a world that the snake lives in', function () {
      var world = new World();
      assert.isObject(world);
    });

    it('should have a width and height', function () {
      var world = new World(400, 400);
      assert.equal(world.height, 400);
      assert.equal(world.width, 400);
    });
  });

  context('snake grow', function() {
    it('food x value will become the x value of the new snake piece', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      world.growSnake();
      assert.equal(world.food.x, world.totalSnake[0].x);
    });
    it('food y value will become the y value of the new snake piece', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      world.growSnake();
      assert.equal(world.food.y, world.totalSnake[0].y);
    });
  });

  context('total snake build', function() {
    it('should be an array', function() {
      var snake = new Snake(20, 20 , 20 , 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.isArray(totalSnake);
    });

    it('should add snake objects to the total snake array', function() {
      var snake = new Snake(20, 20 , 20 , 20);
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      assert.equal(totalSnake.length, 1);
      world.growSnake();
      assert.equal(totalSnake.length, 2);
    });

    it('should return the number of elements in the snake array', function() {
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      world.growSnake();
      assert.equal(totalSnake.length, 2);
    });
    it('should create a snake with three elements in the array', function() {
      var world = new World(400, 400);
      var totalSnake = world.totalSnake;
      world.createTotalSnake();
    });
  });

  // context('collision testing', function() {
  //   it('Prototype, "isSnakeCollidingWithSegments" should return true if segments and head collide', function(snake) {
  //     var snake = new Snake(20, 20 , 20 , 20);
  //     var head = snake.head(20, 20, 20, 20);
  //     var tail = snake.tail(20, 20, 20, 20);
  //     snake.isCollidingWithSegments();
  //     assert.equal(snake.head, snake.tail);
  //   });
  // });

  context('detect collisions', function() {
    it('should return true if the snake is colliding with food', function() {
      var world = new World(400, 400);
      var snake = new Snake(20, 20, 20, 20);
      var food = new Food(20, 20, 20, 20);
      var collision = world.isSnakeCollidingWithFood();
      assert.equal(collision, true);
    });
  });

  context('move snake direction', function() {
    it('"rightArrow()" should move the snake right in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.rightArrow);
    });

    it('"leftArrow()" should move the snake left in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.leftArrow);
    });

    it('"upArrow()" should move the snake up in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.upArrow);
    });

    it('"downArrow()" should move the snake down in the world', function() {
      var world = new World(400, 400);
      assert.isFunction(world.downArrow);
    });
  });
});
