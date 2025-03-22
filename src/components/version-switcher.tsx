import * as React from 'react';
import SidebarMenu from '@/components/sidebar/SidebarMenu';

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  return (
    <SidebarMenu
      withDropdown
      dropdownConfig={{
        defaultVersion: defaultVersion,
        selectedVersion: selectedVersion,
        setSelectedVersion: setSelectedVersion,
        versions: versions,
      }}
    />
  );
}
