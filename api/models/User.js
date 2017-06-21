/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    first_name: {
      required: true,
      type: 'string',
      alpha: true
    },
    last_name: {
      required: true,
      type: 'string',
      alpha: true
    },
    position: {
      required: true,
      type: 'string',
      uppercase: true
    },
    team: {
      required: true,
      type: 'string',

    },
    email: {
      type: 'email',
      contains: '@',

    },
    college: {
      type: 'string'
   }
  }
};
