"""Runs lib.py + one asset script inside Blender:  python tools/blender/build.py chair extinguisher plant mug"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from blender_rpc import run

HERE = os.path.dirname(os.path.abspath(__file__))
lib = open(os.path.join(HERE, 'lib.py'), encoding='utf-8').read()
for name in sys.argv[1:]:
    code = lib + '\n' + open(os.path.join(HERE, name + '.py'), encoding='utf-8').read()
    r = run(code)
    print(name, '->', (r.get('result') or {}).get('result', r) if isinstance(r.get('result'), dict) else r)
