function HashMap() {
    this.buckets = {};
}

HashMap.prototype.put = function(key, value) {
    var hashCode = key.hashCode();
    var bucket = this.buckets[hashCode];
    if (!bucket) {
        bucket = new Array();
        this.buckets[hashCode] = bucket;
    }
    for (var i = 0; i < bucket.length; ++i) {
        if (bucket[i].key.equals(key)) {
            bucket[i].value = value;
            return;
        }
    }
    bucket.push({ key: key, value: value });
}

HashMap.prototype.get = function(key) {
    var hashCode = key.hashCode();
    var bucket = this.buckets[hashCode];
    if (!bucket) {
        return null;
    }
    for (var i = 0; i < bucket.length; ++i) {
        if (bucket[i].key.equals(key)) {
            return bucket[i].value;
        }
    }
}

HashMap.prototype.keys = function() {
    var keys = new Array();
    for (var hashKey in this.buckets) {
        var bucket = this.buckets[hashKey];
        for (var i = 0; i < bucket.length; ++i) {
            keys.push(bucket[i].key);
        }
    }
    return keys;
}

HashMap.prototype.values = function() {
    var values = new Array();
    for (var hashKey in this.buckets) {
        var bucket = this.buckets[hashKey];
        for (var i = 0; i < bucket.length; ++i) {
            values.push(bucket[i].value);
        }
    }
    return values;
}
