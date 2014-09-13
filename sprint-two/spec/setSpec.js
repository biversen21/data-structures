describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should accept number as a unique key', function(){
    set.add(2);
    set.add("2");
    set.remove("2");
    expect(set.contains(2)).to.equal(true);
  });

  it('should accept an object as a unique key', function(){
    set.add({"bob":"bobby"});
    set.add(true);
    expect(set.contains({"bob":"bobby"})).to.equal(true);
    expect(set.contains(true)).to.equal(true);
  });

});
