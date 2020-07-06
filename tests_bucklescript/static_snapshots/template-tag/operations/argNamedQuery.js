// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


var Raw = { };

var query = (require("gql")`
  query ($query: Int!)  {
    argNamedQuery(query: $query)
  }
`);

function parse(value) {
  return {
          argNamedQuery: value.argNamedQuery
        };
}

function serialize(value) {
  var value$1 = value.argNamedQuery;
  return {
          argNamedQuery: value$1
        };
}

function serializeVariables(inp) {
  return {
          query: inp.query
        };
}

function makeVariables(query, param) {
  return {
          query: query
        };
}

var Z__INTERNAL = {
  _graphql_query_82: 0,
  _graphql_query_75: 0,
  graphql_module: 0
};

var MyQuery = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  Z__INTERNAL: Z__INTERNAL
};

var Raw$1 = { };

var query$1 = (require("gql")`
  query Query1($query: Int!)  {
    argNamedQuery(query: $query)
  }
`);

function parse$1(value) {
  return {
          argNamedQuery: value.argNamedQuery
        };
}

function serialize$1(value) {
  var value$1 = value.argNamedQuery;
  return {
          argNamedQuery: value$1
        };
}

function serializeVariables$1(inp) {
  return {
          query: inp.query
        };
}

function makeVariables$1(query, param) {
  return {
          query: query
        };
}

var Z__INTERNAL$1 = {
  _graphql_Query1_query_210: 0,
  _graphql_Query2_query_210: 0,
  _graphql_query_203: 0,
  graphql_module: 0
};

var Query1 = {
  Raw: Raw$1,
  query: query$1,
  parse: parse$1,
  serialize: serialize$1,
  serializeVariables: serializeVariables$1,
  makeVariables: makeVariables$1,
  Z__INTERNAL: Z__INTERNAL$1
};

var Raw$2 = { };

var query$2 = (require("gql")`
  query Query2($query: Int!)  {
    argNamedQuery(query: $query)
  }
`);

function parse$2(value) {
  return {
          argNamedQuery: value.argNamedQuery
        };
}

function serialize$2(value) {
  var value$1 = value.argNamedQuery;
  return {
          argNamedQuery: value$1
        };
}

function serializeVariables$2(inp) {
  return {
          query: inp.query
        };
}

function makeVariables$2(query, param) {
  return {
          query: query
        };
}

var Z__INTERNAL$2 = {
  _graphql_Query1_query_278: 0,
  _graphql_Query2_query_278: 0,
  _graphql_query_271: 0,
  graphql_module: 0
};

var Query2 = {
  Raw: Raw$2,
  query: query$2,
  parse: parse$2,
  serialize: serialize$2,
  serializeVariables: serializeVariables$2,
  makeVariables: makeVariables$2,
  Z__INTERNAL: Z__INTERNAL$2
};

var MultipleQueryWithSameVarName = {
  Query1: Query1,
  Query2: Query2
};

exports.MyQuery = MyQuery;
exports.MultipleQueryWithSameVarName = MultipleQueryWithSameVarName;
/* query Not a pure module */
