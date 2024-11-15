# Hilson

## new lib
```
pnpm nx g @nx/react:lib [LIB_NAME]
```

## new component
```
pnpm nx g @nx/react:component [COMPONENT_NAME] --project=[LIB_NAME] --export

# ex:
pnpm nx g @nx/react:component button --project=ui --export --skipTests --style=none
# or use --directory
pnpm nx g @nx/react:component button --directory=ui/src/lib/button --export --skipTests --style=none
```