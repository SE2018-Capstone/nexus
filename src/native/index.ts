type NexusNative = {
  init: (winHandle: Buffer) => void;
  enableGhost: () => void;
  disableGhost: () => void;
};

export default require('bindings')({ //tslint:disable-line
    module_root: __dirname,
    bindings: 'NexusNative',
}) as NexusNative;
