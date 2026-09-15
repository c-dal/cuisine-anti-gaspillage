import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { validateMessage,replyTo } from "../public/js/brain.js";

describe('validateMessage', () => {
  it('refuse une chaîne vide', () => {
    assert.equal(validateMessage('   ').ok, false);
  });
  it('nettoie les espaces', () => {
    assert.deepEqual(validateMessage('  salut  '), { ok: true, value: 'salut' });
  });
  it('une chaine trop longue est refusee', ()=>{
    assert.equal(validateMessage('a'.repeat(281)).ok, false);
    assert.equal(validateMessage('a'.repeat(280)).ok, true);
  });
});

describe('replyTo', ()=>{
    it('n\'est pas sensible à la casse', ()=>{
        assert.deepEqual(replyTo('SALUT'), replyTo('salut'));
    });
    it('phrase inconnue', ()=>{
        assert.equal(validateMessage('phrase inconnue').ok, false);
        assert.notDeepStrictEqual(replyTo('phrase inconnue'),replyTo('aide'));
    });
});