import React, { useState } from 'react';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
    {
        id: 'app',
        position: { x: 250, y: 0 },
        data: { label: 'Moly Application' },
        style: { background: '#FF2D55', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(255, 45, 85, 0.3)' },
    },
    {
        id: 'agents',
        position: { x: 250, y: 100 },
        data: { label: 'MoFa Agents' },
        style: { background: '#30B0C7', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(48, 176, 199, 0.3)' },
    },
    {
        id: 'models',
        position: { x: 250, y: 200 },
        data: { label: 'Moxin Models (LLM/Voice)' },
        style: { background: '#5E5CE6', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(94, 92, 230, 0.3)' },
    },
    {
        id: 'compute',
        position: { x: 250, y: 300 },
        data: { label: 'Inference (KTransformers)' },
        style: { background: '#0071E3', color: 'white', border: 'none', borderRadius: '12px', width: 200, padding: '12px', fontWeight: '600', boxShadow: '0 4px 12px rgba(0, 113, 227, 0.3)' },
    },
];

const initialEdges = [
    { id: 'e1-2', source: 'app', target: 'agents', animated: true, style: { stroke: '#86868B' } },
    { id: 'e2-3', source: 'agents', target: 'models', animated: true, style: { stroke: '#86868B' } },
    { id: 'e3-4', source: 'models', target: 'compute', animated: true, style: { stroke: '#86868B' } },
];

export default function InteractiveStack() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    return (
        <div style={{ height: '400px', width: '100%', background: '#F5F5F7', borderRadius: '20px', border: '1px solid #D2D2D7' }}>
            <ReactFlow nodes={nodes} edges={edges} fitView attributionPosition="bottom-right">
                <Background color="#D2D2D7" gap={16} />
            </ReactFlow>
        </div>
    );
}
