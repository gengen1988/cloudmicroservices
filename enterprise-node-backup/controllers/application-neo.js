var collections = require('../lib/collections');

function create(args) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application
        .create(args);
    });
}

function find(args) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application
        .find(args);
    });
}

function findOne(args) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application
        .findOne(args)
        .populate('features');
    });
}

function destroy(id) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application.destroy(id);
    });
}

function update(args) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application.update(args);
    });
}

function addFeature(appId, featureId) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application
        .findOne(appId)
        .populate('features')
    })
    .then(function(application) {
      application.features.add(featureId);
      return application.save();
    });
}

function removeFeature(appId, featureId) {
  return collections
    .get('application')
    .then(function(Application) {
      return Application
        .findOne(appId)
        .populate('features')
    })
    .then(function(application) {
      application.features.remove(featureId);
      return application.save();
    });
}

exports.create = create;
exports.find = find;
exports.destroy = destroy;
exports.update = update;
exports.addFeature = addFeature;
exports.removeFeature = removeFeature;
exports.findOne = findOne;
